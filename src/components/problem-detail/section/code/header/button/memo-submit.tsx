import React from 'react';
import styled from 'styled-components';

import { BLUE_GREEN, GREY } from 'src/constants/colors';

import { ICode } from 'src/interfaces/code/ICode';
import CheckIcon from 'src/assets/icons/check';

export type MemoSubmitButtonProps = Pick<ICode, 'id'>;

export default function MemoSubmitButton({ id }: MemoSubmitButtonProps) {
  const handleButtonClick = async () => {
    //메모 submit
  };

  return (
    <Button onClick={handleButtonClick}>
      <CheckIcon style={{ width: '1.6rem', height: '1.6rem' }} />
    </Button>
  );
}
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${GREY[750]};
  color: ${GREY[400]};
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 0.6rem;
  padding: 0;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
`;
