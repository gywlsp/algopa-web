import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { BLUE_GREEN, WHITE } from 'src/constants/colors';

import { CodeSectionType } from 'src/modules/atoms/problem';

export default function NoteViewButton() {
  const setCodeSectionType = useSetRecoilState(CodeSectionType);

  const handleButtonClick = async () => {
    setCodeSectionType('note');
  };

  return <Button onClick={handleButtonClick}>풀이 노트</Button>;
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
