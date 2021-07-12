import React, { CSSProperties, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type SectionProps = {
  title: string;
  children: ReactNode | ReactNodeArray;
  className?: string;
};

export default function Section({ title, children, className }: SectionProps) {
  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Title = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${GREY[800]};
  margin-bottom: 2rem;
`;
