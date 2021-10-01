import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type IndexEditInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function IndexEditInput({
  value,
  onChange,
}: IndexEditInputProps) {
  return (
    <InputWrapper>
      <StyledInput value={value} onChange={onChange} placeholder="내용 입력" />
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
