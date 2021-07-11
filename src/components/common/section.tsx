import React, { CSSProperties, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type SectionProps = {
  title: string;
  children: ReactNode | ReactNodeArray;
  wrapperStyle?: CSSProperties;
};

export default function Section({
  title,
  children,
  wrapperStyle,
}: SectionProps) {
  return (
    <Wrapper style={wrapperStyle}>
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
  margin: 0 auto 1.2rem 0;
`;
