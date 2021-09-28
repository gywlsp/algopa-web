import React from 'react';
import styled from 'styled-components';

import SkipButton from './skip';
import { GREY } from 'src/constants/colors';

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

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.4rem;
  padding: 0;
  margin: 0 0.4rem;
  color: ${GREY[400]};
  background-color: ${GREY[800]};
  border: 0.1rem solid ${GREY[400]};
  border-radius: 999px;
`;
