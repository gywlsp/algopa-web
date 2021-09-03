import React from 'react';
import styled from 'styled-components';

import { BLUE_GREEN, GREY } from 'src/constants/colors';

export type SelectOption = {
  label: string;
  value: any;
};

export type SelectSize = 'medium' | 'small';

export type SelectProps = {
  size?: SelectSize;
  className?: string;
  title?: string;
  value: any;
  options: SelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({
  size = 'medium',
  className,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <Wrapper
      className={className}
      size={size}
      value={value}
      onChange={onChange}
    >
      {options?.map(({ label: l, value: v }) => (
        <Option key={v} size={size} selected={v === value} value={v}>
          {l}
        </Option>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.select<any>`
  font-size: ${({ size }) => (size === 'medium' ? '1.4rem' : '1.2rem')};
  color: ${BLUE_GREEN[800]};
  :disabled {
    color: ${GREY[400]};
  }
  padding: 0.6rem 2rem 0.6rem 1rem;
  margin: 0;
  background-color: ${BLUE_GREEN[200]};
  border: none;
  border-radius: 0.2rem;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 2px;
`;

const Option = styled.option<Pick<SelectProps, 'size'>>`
  font-size: ${({ size }) => (size === 'medium' ? '1.4rem' : '1.2rem')};
`;
