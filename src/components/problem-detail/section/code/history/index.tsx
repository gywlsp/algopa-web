import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Header = dynamic(() => import('./header'));
const IndexListSection = dynamic(() => import('./index-list'));
const EventSection = dynamic(() => import('./event'));
import { GREY } from 'src/constants/colors';

import { withCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';

export type CodeHistorySectionProps = {
  isShown: boolean;
};

function CodeHistorySection({ isShown }: CodeHistorySectionProps) {
  if (!isShown) {
    return <></>;
  }

  return (
    <Wrapper>
      <Header />
      <Row>
        <EventSection />
        <IndexListSection />
      </Row>
    </Wrapper>
  );
}

export default withCodeHistoryPlayerContext(CodeHistorySection);

const Wrapper = styled.div`
  position: relative;
  width: 66%;
  height: 100%;
  background-color: ${GREY[850]};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
