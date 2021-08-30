import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type TextInputProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  value: string;
};

export default function MemoInput({ value, onChange }: TextInputProps) {
  return (
    <Row>
      <InputWrapper>
        <StyledInput value={value} onChange={onChange} placeholder="Message" />
      </InputWrapper>
      {/* check button */}
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  flex: 1;
`;

const InputWrapper = styled.div`
  flex: 1;
  height: 4rem;
  padding: 0 1.2rem;
  background-color: ${GREY[400]};
  border: 1px solid ${GREY[400]};
  :focus-within {
    border: 1px solid ${GREY[500]};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.6rem;
  color: ${GREY[800]};

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
