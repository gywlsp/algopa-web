import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type TextInputProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  value?: string;
};

export default function MemoInput({ value, onChange }: TextInputProps) {
  return (
    <InputWrapper>
      <StyledInput value={value} onChange={onChange} placeholder="Message" />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  flex: 1;
  height: 2.4rem;
  padding: 0 0.6rem;
  background-color: ${GREY[750]};
  border: none;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: ${GREY[400]};
  background-color: ${GREY[750]};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
  :-ms-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
  :-mos-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
`;
