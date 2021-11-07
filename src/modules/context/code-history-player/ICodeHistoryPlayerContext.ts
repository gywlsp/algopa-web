import { MutableRefObject } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import { CodeTextChangeEvent } from 'src/types/code';

export interface ICodeHistoryPlayerContext {
  state: {
    events: CodeTextChangeEvent[];
    selectedEventOrder: number;
    timelineRef: MutableRefObject<any>;
    isPlaying: boolean;
    playSpeed: number;
    draggablePos: {
      x: number;
      y: number;
    };
    timelineBound: number;
    fragmentWidth: number;
  };
  action: {
    updatePlaySpeed: (speed: number) => void;
    skipEvent: (value: number) => void;
    togglePlaying: (actionType?: 'start' | 'stop') => void;
    initPlaying: () => void;
    onDragStart: DraggableEventHandler;
    onDrag: DraggableEventHandler;
    onDragStop: DraggableEventHandler;
    onIndexCardClick: (eventOrder: number) => void;
  };
}
