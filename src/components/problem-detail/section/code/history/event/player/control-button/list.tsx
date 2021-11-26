import React from 'react';
import styled from 'styled-components';

import SkipButton from './skip';
import PlayToggleButton from './play-toggle';
import PlayInitButton from './play-init';

const SKIP_BACK_VALUE = [-100, -50, -10, -1];
const SKIP_FRONT_VALUE = [1, 10, 50, 100];

export default function CodeHistoryPlayerControlButtonList() {
  return (
    <Wrapper>
      {SKIP_BACK_VALUE.map((value) => (
        <SkipButton key={value} value={value} />
      ))}
      <PlayToggleButton />
      <PlayInitButton />
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
