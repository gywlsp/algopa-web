import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { GREY } from 'src/constants/colors';

import { useCodeEvents } from 'src/hooks/api/code';
import { selectedCodeEvent } from 'src/modules/selectors/code';
import { selectedCodeEventId } from 'src/modules/atoms/code';

export type CodeHistoryPlayerSkipButtonProps = {
  value: number;
};

export default function CodeHistoryPlayerSkipButton({
  value,
}: CodeHistoryPlayerSkipButtonProps) {
  const { data: events } = useCodeEvents();
  const selectedEvent = useRecoilValue(selectedCodeEvent);
  const setSelectedEventId = useSetRecoilState(selectedCodeEventId);

  const buttonText = (value >= 0 ? '+' : '') + value;

  const handleButtonClick = () => {
    const prevOrder = selectedEvent?.order;
    const nextOrder =
      value >= 0
        ? Math.min(events.length, prevOrder + value)
        : Math.max(1, prevOrder + value);
    const nextId = events[nextOrder - 1]?.id;
    setSelectedEventId(nextId);
  };

  return <Button onClick={handleButtonClick}>{buttonText}</Button>;
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.2rem;
  padding: 0;
  margin: 0 0.4rem;
  color: ${GREY[400]};
  background-color: ${GREY[800]};
  border: 0.1rem solid ${GREY[400]};
  border-radius: 999px;
  cursor: pointer;
`;
