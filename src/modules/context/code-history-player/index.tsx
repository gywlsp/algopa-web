import { useState, useContext, createContext, useEffect, useRef } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { selectedCodeEventId, codeEvents } from 'src/modules/atoms/code';
import { selectedCodeEventOrder } from 'src/modules/selectors/code';
import { ICodeHistoryPlayerContext } from './ICodeHistoryPlayerContext';

const CodeHistoryPlayerContext =
  createContext<ICodeHistoryPlayerContext>(undefined);

export const useCodeHistoryPlayerContext = () =>
  useContext(CodeHistoryPlayerContext);

export const withCodeHistoryPlayerContext =
  (WrappedComponent: React.FunctionComponent<any>) => () => {
    const events = useRecoilValue(codeEvents);
    const selectedEventOrder = useRecoilValue(selectedCodeEventOrder);
    const setSelectedEventId = useSetRecoilState(selectedCodeEventId);

    const timelineRef = useRef(null);
    const scrubberRef = useRef(null);
    const progressBarRef = useRef(null);

    const [isPlaying, setPlaying] = useState(false);
    const [playSpeed, setPlaySpeed] = useState(1);
    const [playSec, setPlaySec] = useState(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
    const unitSec = 0.15 / playSpeed;

    useEffect(() => {
      if ((!playSec && events && selectedEventOrder) || !isPlaying) {
        setPlaySec(unitSec * (events?.length - selectedEventOrder + 1));
      }
    }, [events, selectedEventOrder, isPlaying]);

    useEffect(() => {
      const percent = 100 * ((selectedEventOrder - 1) / events?.length) + '%';
      updateScrubberPos(percent);
    }, [selectedEventOrder]);

    useEffect(() => {
      if (isPlaying) {
        setPlayInterval(selectedEventOrder);
      } else {
        endPlayInterval(intervalId);
      }
    }, [isPlaying]);

    const setPlayInterval = (_currOrder: number) => {
      const _intervalId = setInterval(() => {
        if (_currOrder < events.length) {
          setSelectedEventId(events[_currOrder++]?.id);
        }
        if (_currOrder === events.length) {
          updateScrubberPos();
          endPlayInterval(intervalId);
          setPlaying(false);
        }
      }, unitSec * 1000);
      setIntervalId(_intervalId);
    };

    const endPlayInterval = (intervalId: NodeJS.Timeout) => {
      clearInterval(intervalId);
    };

    const updateScrubberPos = (
      marginLeft: string | number = window
        ?.getComputedStyle(scrubberRef.current)
        ?.getPropertyValue('margin-left')
    ) => {
      scrubberRef.current.style.marginLeft = marginLeft;
      progressBarRef.current.style.width = marginLeft;
    };

    const togglePlaying = (
      actionType: 'start' | 'stop' = isPlaying ? 'stop' : 'start'
    ) => {
      if (actionType === 'start' && selectedEventOrder !== events.length) {
        setPlaying(true);
      }
      if (actionType === 'stop') {
        updateScrubberPos();
        setPlaying(false);
      }
    };

    const initPlaying = () => {
      setPlaying(false);
      setSelectedEventId(events[0].id);
    };

    const skipEvent = (value: number) => {
      if (isPlaying) {
        togglePlaying('stop');
      }
      const prevOrder = selectedEventOrder;
      const nextOrder =
        value >= 0
          ? Math.min(events.length, prevOrder + value)
          : Math.max(1, prevOrder + value);
      const nextId = events[nextOrder - 1]?.id;
      setSelectedEventId(nextId);
    };

    const updatePlaySpeed = (speed: number) => {
      if (isPlaying) {
        togglePlaying('stop');
      }
      setPlaySpeed(speed);
    };

    const codeHistoryPlayerStore = {
      state: {
        events,
        selectedEventOrder,
        timelineRef,
        scrubberRef,
        progressBarRef,
        isPlaying,
        playSpeed,
        playSec,
      },
      action: {
        updatePlaySpeed,
        skipEvent,
        togglePlaying,
        initPlaying,
      },
    };

    return (
      <CodeHistoryPlayerContext.Provider value={codeHistoryPlayerStore}>
        <WrappedComponent />
      </CodeHistoryPlayerContext.Provider>
    );
  };
