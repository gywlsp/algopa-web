import React from 'react';
import styled from 'styled-components';
import PlayToggleButton from './play-toggle';
import PlayInitButton from './play-init';

import SkipButton from './skip';

const SKIP_BACK_VALUE = [-100, -50, -10, -1];
const SKIP_FRONT_VALUE = [1, 10, 50, 100];

export type CodeHistoryPlayerControlButtonProps = {
  isPlaying: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  updatePlayRate: () => void;
};

export default function CodeHistoryPlayerControlButtonList(
  props: CodeHistoryPlayerControlButtonProps
) {
  return (
    <Wrapper>
      {SKIP_BACK_VALUE.map((value) => (
        <SkipButton key={value} value={value} />
      ))}
      <PlayToggleButton {...props} />
      <PlayInitButton {...props} />
      {SKIP_FRONT_VALUE.map((value) => (
        <SkipButton key={value} value={value} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  margin: 0 auto;
`;
