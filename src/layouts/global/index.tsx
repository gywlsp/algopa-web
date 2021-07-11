import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import GlobalHeader from './header';

export type GlobalLayoutProps = {
  children?: ReactNode | ReactNodeArray;
};

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <>
      <GlobalHeader />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
`;
