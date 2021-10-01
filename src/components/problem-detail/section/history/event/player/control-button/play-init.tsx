import React from 'react';
import styled from 'styled-components';

import { BLUE_GREEN } from 'src/constants/colors';

import { useCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';

export default function CodeHistoryPlayerPlayInitButton() {
  const {
    action: { initPlaying },
  } = useCodeHistoryPlayerContext();

  return (
    <Button onClick={initPlaying}>
      <InitIcon />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
  cursor: pointer;
  background: none;
  border: none;
`;

const InitIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.2rem;
  background-color: ${BLUE_GREEN[400]};
`;
