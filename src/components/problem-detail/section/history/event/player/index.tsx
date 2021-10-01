import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import EventDisplay from './event-display';
import Timeline from './timeline';
import ControlButtonList from './control-button/list';
import { GREY } from 'src/constants/colors';

export default function CodeHistoryPlayer() {
  const scrubberRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [playRate, setPlayRate] = useState('0%');

  return (
    <>
      <Timeline
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        playRate={playRate}
        ref={scrubberRef}
      />
    <Wrapper>
      <EventDisplay />
      <ControlButtonList />
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  padding: 1rem 10rem 1rem 1.2rem;
  border-top: 0.1rem solid ${GREY[900]};
  background-color: #333;
`;
