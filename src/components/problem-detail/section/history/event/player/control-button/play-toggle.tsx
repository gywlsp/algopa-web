import React from 'react';
import styled from 'styled-components';

import { BLUE_GREEN } from 'src/constants/colors';
import PlayIcon from 'src/assets/icons/play';
import PauseIcon from 'src/assets/icons/pause';

import { useCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';

export default function CodeHistoryPlayerPlayToggleButton() {
  const {
    state: { isPlaying },
    action: { togglePlaying },
  } = useCodeHistoryPlayerContext();

  const Icon = isPlaying ? PauseIcon : PlayIcon;

  return (
    <Button onClick={togglePlaying}>
      <Icon style={{ width: '2rem', height: '2rem' }} fill={BLUE_GREEN[400]} />
    </Button>
  );
}

const Button = styled.button`
  margin-left: 0.2rem;
  cursor: pointer;
  background: none;
  border: none;
`;
