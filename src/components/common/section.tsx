import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type SectionProps = {
  title: string;
  isSub?: boolean;
  children: ReactNode | ReactNodeArray;
  className?: string;
};

export default function Section({
  title,
  isSub = false,
  children,
  className,
}: SectionProps) {
  return (
    <Wrapper className={className}>
      <Title isSub={isSub}>{title}</Title>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Title = styled.p<{ isSub: boolean }>`
  ${({ isSub }) =>
    isSub
      ? 'font-size: 2rem; margin-bottom: 1.2rem;'
      : 'font-size: 2.4rem; margin-bottom: 2rem;'}
  font-weight: 500;
  color: ${GREY[800]};
`;
