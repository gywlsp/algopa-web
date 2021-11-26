import React from 'react';
import styled from 'styled-components';

import CodeTextSection from '../code-text';
import EventDetailSection from './detail';
import CodeHistoryPlayer from './player';

export default function CodeHistoryEventSection() {
  return (
    <Wrapper>
      <CodeTextSection />
      <CodeHistoryPlayer />
      <EventDetailSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 0.8rem;
  position: relative;
  flex: 1;
  height: calc(100vh - 31.2rem);
`;
