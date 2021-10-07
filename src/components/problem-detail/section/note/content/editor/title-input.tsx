import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type NoteTitleInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function NoteTitleInput({
  value,
  onChange,
}: NoteTitleInputProps) {
  return <Input value={value} onChange={onChange} placeholder="제목" />;
}

const Input = styled.input`
  width: 100%;
  height: 2.8rem;
  font-size: 1.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 2rem;
  border: none;
  border-bottom: 1px solid ${GREY[500]};
  outline: none;
  color: ${GREY[400]};
  background: none;
  :focus-within {
    border-bottom: 1px solid ${GREY[400]};
  }
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