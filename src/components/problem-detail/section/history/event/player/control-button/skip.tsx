import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

import { useCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';

export type CodeHistoryPlayerSkipButtonProps = {
  value: number;
};

export default function CodeHistoryPlayerSkipButton({
  value,
}: CodeHistoryPlayerSkipButtonProps) {
  const {
    action: { skipEvent },
  } = useCodeHistoryPlayerContext();

  const buttonText = (value >= 0 ? '+' : '') + value;

  const handleButtonClick = () => {
    skipEvent(value);
  };

  return <Button onClick={handleButtonClick}>{buttonText}</Button>;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  height: 2.4rem;
  font-size: 0.8rem;
  padding: 0;
  margin: 0 0.4rem;
  color: ${GREY[400]};
  background-color: ${GREY[800]};
  &:hover {
    background-color: ${GREY[700]};
    transition: all 0.2s;
  }
  border: 0.1rem solid ${GREY[500]};
  border-radius: 999px;
  cursor: pointer;
`;
