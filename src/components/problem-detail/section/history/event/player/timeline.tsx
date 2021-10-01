import React from 'react';
import styled from 'styled-components';

import { BLUE_GREEN, GREY } from 'src/constants/colors';

import { useCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';

export default function CodeHistoryPlayerTimeline() {
  const {
    state: { timelineRef, scrubberRef, playSec, isPlaying, playRate },
  } = useCodeHistoryPlayerContext();

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
