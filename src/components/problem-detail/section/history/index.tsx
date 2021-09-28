import React from 'react';
import styled from 'styled-components';

import Header from './header';
import IndexListSection from './index-list';
import EventSection from './event';
import { GREY } from 'src/constants/colors';

export default function CodeHistorySection() {
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
