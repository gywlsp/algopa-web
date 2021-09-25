import React from 'react';
import styled from 'styled-components';

import { BLUE_GREEN, WHITE } from 'src/constants/colors';

export default function CodeHistoryViewButton() {
  const handleButtonClick = async () => {
    //풀이 내역 조회 컴포넌트 띄우기
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
