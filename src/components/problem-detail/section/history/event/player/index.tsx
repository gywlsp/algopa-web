import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import EventDisplay from './event-display';
import Timeline from './timeline';
import ControlButtonList from './control-button/list';
import { BLUE_GREEN } from 'src/constants/colors';

import { codeEvents } from 'src/modules/atoms/code';
import { selectedCodeEventOrder } from 'src/modules/selectors/code';

export default function CodeHistoryPlayer() {
  const codeEventOrder = useRecoilValue(selectedCodeEventOrder);
  const events = useRecoilValue(codeEvents);
  const scrubberRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [playRate, setPlayRate] = useState('0%');

  const unitPercent = events?.length && 100 / events.length;

  useEffect(() => {
    setPlayRate((codeEventOrder - 1) * unitPercent + '%');
  }, [codeEventOrder]);

  const updatePlayRate = () => {
    setPlayRate(
      window
        ?.getComputedStyle(scrubberRef.current)
        ?.getPropertyValue('margin-left')
    );
  };

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
        <ControlButtonList
          isPlaying={isPlaying}
          setPlaying={setPlaying}
          updatePlayRate={updatePlayRate}
        />
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
  background-color: ${BLUE_GREEN[900]};
`;
