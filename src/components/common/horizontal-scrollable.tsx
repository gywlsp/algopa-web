import React, { ReactNode, ReactNodeArray, CSSProperties } from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type HorizontalScrollableProps = {
  style?: React.CSSProperties;
  containerStyle?: CSSProperties;
  children: ReactNode | ReactNodeArray;
  className?: string;
};

export default function HorizontalScrollable({
  style,
  containerStyle,
  children,
  className,
}: HorizontalScrollableProps) {
  return (
    <Wrapper style={style} className={className}>
      <Container style={containerStyle}>{children}</Container>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  touch-action: auto;

  @media (min-width: 430px) {
    -ms-overflow-style: auto;
    &::-webkit-scrollbar {
      display: flex;
      height: 0.4rem;
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      background: ${GREY[400]};
      width: 0.4rem;
      opacity: 1;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
  }
`;

const Container = styled.div`
  display: flex;
`;
