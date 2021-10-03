import { MutableRefObject } from 'react';
import { CodeTextChangeEvent } from 'src/types/code';

export interface ICodeHistoryPlayerContext {
  state: {
    events: CodeTextChangeEvent[];
    selectedEventOrder: number;
    timelineRef: MutableRefObject<any>;
    scrubberRef: MutableRefObject<any>;
    progressBarRef: MutableRefObject<any>;
    isPlaying: boolean;
    playSpeed: number;
    playSec: number;
  };
  action: {
    updatePlaySpeed: (speed: number) => void;
    skipEvent: (value: number) => void;
    togglePlaying: () => void;
    initPlaying: () => void;
  };
}
