import React from 'react';
import styled from 'styled-components';

import { BLUE_GREEN, GREY, WHITE } from 'src/constants/colors';

import { ICode } from 'src/interfaces/code/ICode';

export type ViewHistoryButtonProps = Pick<ICode, 'id'>;

export default function ViewHistoryButton({ id }: ViewHistoryButtonProps) {
  const handleButtonClick = async () => {
    //풀이 내역 조회
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
