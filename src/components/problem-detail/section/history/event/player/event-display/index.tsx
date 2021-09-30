import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

import { codeEvents } from 'src/modules/atoms/code';
import { selectedCodeEvent } from 'src/modules/selectors/code';

export default function CodeHistoryPlayerEventDisplay() {
  const events = useRecoilValue(codeEvents);
  const selectedEvent = useRecoilValue(selectedCodeEvent);

  return (
    <Wrapper>
      <StyledP>
        <Strong>{selectedEvent?.order}</Strong> / {events?.length}
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
