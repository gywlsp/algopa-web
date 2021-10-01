import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { BLUE_GREEN } from 'src/constants/colors';

import { codeEvents, selectedCodeEventId } from 'src/modules/atoms/code';
import { CodeHistoryPlayerControlButtonProps } from './list';

export type CodeHistoryPlayerPlayInitButtonProps = Pick<
  CodeHistoryPlayerControlButtonProps,
  'setPlaying'
>;

export default function CodeHistoryPlayerPlayInitButton({
  setPlaying,
}: CodeHistoryPlayerPlayInitButtonProps) {
  const events = useRecoilValue(codeEvents);
  const setEventId = useSetRecoilState(selectedCodeEventId);

  const handleClick = () => {
    setPlaying(false);
    setEventId(events[0].id);
  };

  return (
    <Button onClick={handleClick}>
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
  background-color: ${BLUE_GREEN[400]};
`;
