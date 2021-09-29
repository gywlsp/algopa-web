import React from 'react';
import styled from 'styled-components';

import SkipButton from './skip';

export default function CodeHistoryPlayerControlButtonList() {
  return (
    <Wrapper>
      <SkipButton value={-1} />
      <SkipButton value={1} />
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
