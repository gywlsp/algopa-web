import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { BLUE_GREEN, WHITE } from 'src/constants/colors';

import { problemPageRightSectionType } from 'src/modules/atoms/problem';
import { codeEvents } from 'src/modules/atoms/code';

export default function CodeHistoryViewButton() {
  const events = useRecoilValue(codeEvents);
  const setRightSectionType = useSetRecoilState(problemPageRightSectionType);

  const handleButtonClick = async () => {
    if (!events || !events.length) {
      alert('풀이 내역이 없습니다.');
      return;
    }
    setRightSectionType('history');
  };

  return <Button onClick={handleButtonClick}>풀이 내역</Button>;
}
const Button = styled.button`
  font-size: 1.2rem;
  background-color: ${BLUE_GREEN[600]};
  color: ${WHITE};
  padding: 0.6rem 0.8rem;
  margin-left: 1.2rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
`;
