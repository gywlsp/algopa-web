import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

import { useCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';

export default function CodeHistoryPlayerEventDisplay() {
  const {
    state: { events, selectedEventOrder },
  } = useCodeHistoryPlayerContext();

  return (
    <Wrapper>
      <StyledP>
        <Strong>{selectedEventOrder}</Strong> / {events?.length}
      </StyledP>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 10rem;
`;

const Strong = styled.strong`
  color: ${GREY[400]};
  font-weight: 400;
`;

const StyledP = styled(P).attrs({
  level: 2,
  color: GREY[450],
})`
  margin-right: 0.2rem;
`;
