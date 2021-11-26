import React from 'react';
import styled from 'styled-components';

import EventDisplay from './event-display';
import Timeline from './timeline';
import ControlButtonList from './control-button/list';
import SpeedSelect from './speed-select';
import { BLUE_GREEN } from 'src/constants/colors';

export default function CodeHistoryPlayer() {
  return (
    <>
      <Timeline />
      <Wrapper>
        <EventDisplay />
        <ControlButtonList />
        <SpeedSelect />
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
  padding: 1rem 1.2rem;
  background-color: ${BLUE_GREEN[900]};
`;
