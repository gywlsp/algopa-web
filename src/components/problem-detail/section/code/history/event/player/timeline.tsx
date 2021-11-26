import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { useRecoilValue } from 'recoil';

import { BLUE_GREEN, GREY } from 'src/constants/colors';

import { useCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';
import { codeEvents } from 'src/modules/atoms/code';

export default function CodeHistoryPlayerTimeline() {
  const events = useRecoilValue(codeEvents);
  const {
    state: { timelineRef, timelineBound, draggablePos, fragmentWidth },
    action: { onDragStart, onDrag, onDragStop },
  } = useCodeHistoryPlayerContext();

  return (
    <Wrapper ref={timelineRef}>
      <Progressbar style={{ width: draggablePos?.x }} />
      <Draggable
        axis="x"
        defaultPosition={{ x: 0, y: 0 }}
        grid={[fragmentWidth, 0]}
        bounds={{ left: 0, right: timelineBound }}
        position={draggablePos}
        onStart={onDragStart}
        onDrag={onDrag}
        onStop={onDragStop}
        offsetParent={timelineRef?.current}
        disabled={events?.length === 1}
      >
        <span>
          <Scrubber />
        </span>
      </Draggable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 0.4rem;
  background-color: ${GREY[700]};
  overflow: visible;
`;

const Progressbar = styled.div`
  position: absolute;
  left: 0;
  height: 0.4rem;
  background-color: ${BLUE_GREEN[400]};
`;

const Scrubber = styled.div`
  position: relative;
  top: -4px;
  width: 12px;
  height: 12px;
  background-color: ${BLUE_GREEN[400]};
  border: none;
  border-radius: 999px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: all 0.2s;
  }
`;
