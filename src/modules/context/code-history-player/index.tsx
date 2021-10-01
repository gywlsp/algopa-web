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
    const [isPlaying, setPlaying] = useState(false);
    const [playRate, setPlayRate] = useState('0%');
    const [playSpeed, setPlaySpeed] = useState(1);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

    const unitPercent = events?.length && 100 / events.length;
    const unitSec = 0.15 / playSpeed;
    const playSec = unitSec * (events?.length - selectedEventOrder + 1);

    useEffect(() => {
      setPlayRate((selectedEventOrder - 1) * unitPercent + '%');
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
          clearInterval(intervalId);
          setPlaying(false);
        }
      }, unitSec * 1000);
      setIntervalId(_intervalId);
    };

    const endPlayInterval = (intervalId: NodeJS.Timeout) => {
      clearInterval(intervalId);
    };

    const skipEvent = (value: number) => {
      if (isPlaying) {
        setPlaying(false);
      }
      const prevOrder = selectedEventOrder;
      const nextOrder =
        value >= 0
          ? Math.min(events.length, prevOrder + value)
          : Math.max(1, prevOrder + value);
      const nextId = events[nextOrder - 1]?.id;
      setSelectedEventId(nextId);
    };

    const updateCurrentPlayRate = () => {
      setPlayRate(
        window
          ?.getComputedStyle(scrubberRef.current)
          ?.getPropertyValue('margin-left')
      );
    };

    const updatePlaySpeed = (speed: number) => {
      if (isPlaying) {
        updateCurrentPlayRate();
        setPlaying(false);
      }
      setPlaySpeed(speed);
    };

    const togglePlaying = () => {
      if (isPlaying) {
        updateCurrentPlayRate();
      }
      if (!isPlaying && selectedEventOrder === events.length) {
        return;
      }
      setPlaying(!isPlaying);
    };

    const initPlaying = () => {
      setPlaying(false);
      setSelectedEventId(events[0].id);
    };

    const codeHistoryPlayerStore = {
      state: {
        events,
        selectedEventOrder,
        timelineRef,
        scrubberRef,
        isPlaying,
        playRate,
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
