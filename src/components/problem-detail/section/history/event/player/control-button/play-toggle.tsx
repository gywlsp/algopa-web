import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';

import { BLUE_GREEN } from 'src/constants/colors';
import PlayIcon from 'src/assets/icons/play';
import PauseIcon from 'src/assets/icons/pause';

import { codeEvents } from 'src/modules/atoms/code';
import { selectedCodeEventOrder } from 'src/modules/selectors/code';
import { CodeHistoryPlayerControlButtonProps } from './list';

export type CodeHistoryPlayerPlayToggleButtonProps =
  CodeHistoryPlayerControlButtonProps;

export default function CodeHistoryPlayerPlayToggleButton({
  updatePlayRate,
  isPlaying,
  setPlaying,
}: CodeHistoryPlayerPlayToggleButtonProps) {
  const selectedEventOrder = useRecoilValue(selectedCodeEventOrder);
  const events = useRecoilValue(codeEvents);
  const Icon = isPlaying ? PauseIcon : PlayIcon;

  const handleClick = () => {
    if (isPlaying) {
      updatePlayRate();
    }
    if (!isPlaying && selectedEventOrder === events.length) {
      return;
    }
    setPlaying(!isPlaying);
  };

  return (
    <Button onClick={handleClick}>
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
