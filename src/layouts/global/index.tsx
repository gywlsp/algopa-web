import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const GlobalHeader = dynamic(() => import('./header'));

export type GlobalLayoutProps = {
  className?: string;
  children?: ReactNode | ReactNodeArray;
};

function GlobalLayout({ children, className }: GlobalLayoutProps) {
  return (
    <>
      <GlobalHeader />
      <ContentWrapper className={className}>{children}</ContentWrapper>
    </>
  );
}

export default React.memo(GlobalLayout);

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 128rem;
  padding: 2rem;
  margin: 0 auto;
`;
