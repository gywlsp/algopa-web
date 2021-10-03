import React from 'react';
import styled from 'styled-components';

import { BLUE_GREEN, GREY } from 'src/constants/colors';

import { useCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';

export default function CodeHistoryPlayerTimeline() {
  const {
    state: { timelineRef, scrubberRef, progressBarRef, playSec, isPlaying },
  } = useCodeHistoryPlayerContext();

  return (
    <Wrapper ref={timelineRef}>
      <ProgressBar
        ref={progressBarRef}
        playSec={playSec}
        isPlaying={isPlaying}
      />
      <Scrubber ref={scrubberRef} playSec={playSec} isPlaying={isPlaying} />
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

const ProgressBar = styled.div<{
  isPlaying: boolean;
  playSec: number;
}>`
  position: absolute;
  left: 0;
  width: 0%;
  height: 0.4rem;
  background-color: ${BLUE_GREEN[400]};
  ${({ isPlaying, playSec }) =>
    isPlaying
      ? `
      transform: scaleX(100%);
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
  margin-left: 0%;
  ${({ isPlaying, playSec }) =>
    isPlaying
      ? `
      transform: translateX(100%);
      margin-left: calc(100% - 12px) !important;
    -webkit-transition: ${playSec}s linear;
    -moz-transition: ${playSec}s linear;
    -ms-transition: ${playSec}s linear;
    -o-transition: ${playSec}s linear;
    transition: ${playSec}s linear;
  `
      : ``}
  background-color: ${BLUE_GREEN[400]};
  border: none;
  border-radius: 999px;
`;
