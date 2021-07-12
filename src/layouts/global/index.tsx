import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import GlobalHeader from './header';

export type GlobalLayoutProps = {
  className?: string;
  children?: ReactNode | ReactNodeArray;
};

export default function GlobalLayout({
  children,
  className,
}: GlobalLayoutProps) {
  return (
    <>
      <GlobalHeader />
      <ContentWrapper className={className}>{children}</ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 128rem;
  padding: 2rem;
  margin: 0 auto;
`;
