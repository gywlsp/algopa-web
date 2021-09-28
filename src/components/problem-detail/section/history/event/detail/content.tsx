import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import moment from 'moment';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

import { DAY_KOR } from 'src/data/date';
import { selectedCodeEvent } from 'src/modules/selectors/code';

export default function EventDetailSectionContent() {
  const codeEvent = useRecoilValue(selectedCodeEvent);
  const date = moment(codeEvent.timestamp);
  const dateString =
    moment(date).format('YY/MM/DD') +
    `(${DAY_KOR[date.day()]}) ` +
    moment(date).format('hh:mm:ssA');

  return (
    <Wrapper>
      <Label>시간</Label>
      <StyledP>
        {dateString || '여기는 타임스탬프 공간 여기는 타임스탬프 공간'}
      </StyledP>
      {codeEvent?.index !== undefined && (
        <>
          <Label>인덱스</Label>
          <StyledP>
            {codeEvent.index || '여기는 인덱스 공간 여기는 인덱스 공간'}
          </StyledP>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 1.2rem;
  height: 12.8rem;
  overflow-y: scroll;
  -ms-overflow-style: auto;
  &::-webkit-scrollbar {
    display: flex;
    height: 0.4rem;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${GREY[900]};
    width: 0.4rem;
    opacity: 1;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`;

const Label = styled(P).attrs({ level: 1, color: GREY[400], fontWeight: 500 })`
  margin-bottom: 0.8rem;
`;

const StyledP = styled(P).attrs({
  level: 1,
  color: GREY[450],
  fontWeight: 500,
})`
  margin-bottom: 1rem;
`;
