import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const CodeTextSection = dynamic(() => import('../code-text'));
const EventDetailSection = dynamic(() => import('./detail'));
const CodeHistoryPlayer = dynamic(() => import('./player'));

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
