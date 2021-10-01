import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import moment from 'moment';

import IndexEditInput from './index-input';
import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

import { DAY_KOR } from 'src/data/date';
import { selectedCodeEvent } from 'src/modules/selectors/code';

export type EventDetailSectionContentProps = {
  isEditing: boolean;
  index: string;
  onIndexChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function EventDetailSectionContent({
  isEditing,
  index,
  onIndexChange,
}: EventDetailSectionContentProps) {
  const codeEvent = useRecoilValue(selectedCodeEvent);
  const date = moment(codeEvent?.timestamp);
  const dateString =
    moment(date).format('YY/MM/DD') +
    `(${DAY_KOR[date.day()]}) ` +
    moment(date).format('HH:mm:ss');

  return (
    <Wrapper>
      <Label>시간</Label>
      <StyledP>{dateString}</StyledP>
      <Label>인덱스</Label>
      {!isEditing && codeEvent?.index && <StyledP>{codeEvent.index}</StyledP>}
      {isEditing && <IndexEditInput value={index} onChange={onIndexChange} />}
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
