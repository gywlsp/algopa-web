import { useState, useContext, createContext, useEffect, useRef } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { CodeHistorySectionProps } from 'src/components/problem-detail/section/code/history';

import {
  selectedCodeEventId,
  codeEvents,
  selectedProblemCodeId,
} from 'src/modules/atoms/code';
import { problemPageRightSectionType } from 'src/modules/atoms/problem';
import { selectedCodeEventOrder } from 'src/modules/selectors/code';
import { ICodeHistoryPlayerContext } from './ICodeHistoryPlayerContext';

const CodeHistoryPlayerContext =
  createContext<ICodeHistoryPlayerContext>(undefined);

export const useCodeHistoryPlayerContext = () =>
  useContext(CodeHistoryPlayerContext);

export const withCodeHistoryPlayerContext =
  (WrappedComponent: React.FunctionComponent<CodeHistorySectionProps>) =>
  (props: CodeHistorySectionProps) => {
    const rightSectionType = useRecoilValue(problemPageRightSectionType);
    const codeId = useRecoilValue(selectedProblemCodeId);
    const events = useRecoilValue(codeEvents);
    const selectedEventOrder = useRecoilValue(selectedCodeEventOrder);
    const setSelectedEventId = useSetRecoilState(selectedCodeEventId);

    const timelineRef = useRef(null);

    const [isPlaying, setPlaying] = useState(false);
    const [playSpeed, setPlaySpeed] = useState(1);
    const unitSec = 0.075 / playSpeed;

    const [draggablePos, setDraggablePos] = useState({ x: 0, y: 0 });
    const timelineBound = timelineRef?.current?.clientWidth - 12;
    const fragmentCnt = events?.length - 1;
    const fragmentWidth = timelineBound / (fragmentCnt || 1);
    const [isPlayingBeforeDrag, setPlayingBeforeDrag] = useState(false);

    useEffect(() => {
      initPlaying();
    }, [rightSectionType, codeId]);

    useEffect(() => {
      if (isPlaying) {
        return setPlayInterval(selectedEventOrder);
      }
    }, [isPlaying, playSpeed]);

    const handleSelectedEventChange = ({ order }: { order: number }) => {
      if (!events) {
        return;
      }
      const newId = events[order - 1]?.id;
      const newX = fragmentWidth * (order - 1);
      setSelectedEventId(newId);
      setDraggablePos({ x: newX, y: 0 });
    };

    const setPlayInterval = (_currOrder: number) => {
      const _intervalId = setInterval(() => {
        if (_currOrder < events?.length) {
          handleSelectedEventChange({ order: ++_currOrder });
        }
        if (_currOrder === events?.length) {
          setPlaying(false);
        }
      }, unitSec * 1000);
      return () => clearInterval(_intervalId);
    };

    const togglePlaying = (
      actionType: 'start' | 'stop' = isPlaying ? 'stop' : 'start'
    ) => {
      if (actionType === 'start' && selectedEventOrder !== events.length) {
        setPlaying(true);
      }
      if (actionType === 'stop') {
        setPlaying(false);
      }
    };

    const initPlaying = () => {
      setPlaying(false);
      handleSelectedEventChange({ order: 1 });
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
      handleSelectedEventChange({ order: nextOrder });
    };

    const updatePlaySpeed = (speed: number) => {
      setPlaySpeed(speed);
    };

    const handleDragStart: DraggableEventHandler = (e, data) => {
      if (!isPlaying) {
        return;
      }
      setPlayingBeforeDrag(true);
      togglePlaying('stop');
    };

    const handleDrag: DraggableEventHandler = (e, data) => {
      const { y } = draggablePos;
      const newX = data.x || 0;
      setDraggablePos({ x: newX, y: y });
      setSelectedEventId(events[Math.round(newX / fragmentWidth)]?.id);
    };

    const handleDragStop: DraggableEventHandler = (e, data) => {
      if (!isPlayingBeforeDrag) {
        return;
      }
      setPlayingBeforeDrag(false);
      togglePlaying('start');
    };

    const handleIndexCardClick = (eventOrder: number) => {
      togglePlaying('stop');
      handleSelectedEventChange({ order: eventOrder });
    };

    const codeHistoryPlayerStore = {
      state: {
        events,
        selectedEventOrder,
        timelineRef,
        isPlaying,
        playSpeed,
        draggablePos,
        timelineBound,
        fragmentWidth,
      },
      action: {
        updatePlaySpeed,
        skipEvent,
        togglePlaying,
        initPlaying,
        onDragStart: handleDragStart,
        onDrag: handleDrag,
        onDragStop: handleDragStop,
        onIndexCardClick: handleIndexCardClick,
      },
    };

    return (
      <CodeHistoryPlayerContext.Provider value={codeHistoryPlayerStore}>
        <WrappedComponent {...props} />
      </CodeHistoryPlayerContext.Provider>
    );
  };
