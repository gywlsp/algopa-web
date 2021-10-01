import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { BLUE_GREEN, GREY } from 'src/constants/colors';

import { codeEvents, selectedCodeEventId } from 'src/modules/atoms/code';
import { selectedCodeEventOrder } from 'src/modules/selectors/code';

export type CodeHistoryPlayerTimelineProps = {
  isPlaying: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  playRate: string;
  playSpeed: number;
};


function CodeHistoryPlayerTimeline(
  {
    isPlaying,
    setPlaying,
    playRate,
    playSpeed,
  }: CodeHistoryPlayerTimelineProps,
  scrubberRef
) {
  const timelineRef = useRef(null);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const selectedEventId = useSetRecoilState(selectedCodeEventId);
  const selectedEventOrder = useRecoilValue(selectedCodeEventOrder);
  const events = useRecoilValue(codeEvents);
  const unitSec = 0.15 / playSpeed;
  const playSec = unitSec * (events?.length - selectedEventOrder + 1);

  useEffect(() => {
    if (isPlaying) {
      let curr = selectedEventOrder;
      const _timer = setInterval(() => {
        if (curr < events.length) {
          selectedEventId(events[curr++]?.id);
        }
        if (curr === events.length) {
          clearInterval(timer);
          setPlaying(false);
        }
      }, unitSec * 1000);
      setTimer(_timer);
    } else {
      clearInterval(timer);
    }
  }, [isPlaying]);

  return (
    <Wrapper ref={timelineRef}>
      <ProgressBar
        playSec={playSec}
        isPlaying={isPlaying}
        style={{ width: playRate }}
      />
      <Scrubber
        ref={scrubberRef}
        style={{ marginLeft: playRate }}
        playSec={playSec}
        isPlaying={isPlaying}
      />
    </Wrapper>
  );
}

export default React.forwardRef(CodeHistoryPlayerTimeline);
const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 0.4rem;
  background-color: ${GREY[700]};
  overflow: visible;
`;

const ProgressBar = styled.div<{
  isPlaying: boolean;
  playSec: number;
}>`
  position: absolute;
  left: 0;
  height: 0.4rem;
  background-color: ${BLUE_GREEN[400]};
  ${({ isPlaying, playSec }) =>
    isPlaying
      ? `
      width: 100% !important;
  -webkit-transition: ${playSec}s linear;
  -moz-transition: ${playSec}s linear;
  -ms-transition: ${playSec}s linear;
  -o-transition: ${playSec}s linear;
  transition: ${playSec}s linear;
`
      : ``}
`;

const Scrubber = styled.button<{
  isPlaying: boolean;
  playSec: number;
}>`
  position: relative;
  top: -4px;
  width: 12px;
  height: 12px;
  padding: 0;
  ${({ isPlaying, playSec }) =>
    isPlaying
      ? `
      margin-left: 100% !important;
    -webkit-transition: ${playSec}s linear;
    -moz-transition: ${playSec}s linear;
    -ms-transition: ${playSec}s linear;
    -o-transition: ${playSec}s linear;
    transition: ${playSec}s linear;
  `
      : ``}
  margin-left: 0px;
  background-color: ${BLUE_GREEN[400]};
  border: none;
  border-radius: 999px;
`;
