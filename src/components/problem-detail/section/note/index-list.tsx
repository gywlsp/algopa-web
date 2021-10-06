import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Header from 'src/components/problem-detail/section/history/index-list/header';
import EventIndexPreviewCard from 'src/components/common/card/index-preview';
import { GREY } from 'src/constants/colors';

import { selectedProblemCodeId } from 'src/modules/atoms/code';
import { selectedCodeIndexedEvents } from 'src/modules/selectors/code';

export default function CodeNoteIndexListSection() {
  const codeId = useRecoilValue(selectedProblemCodeId);
  const indexedEvents = useRecoilValue(selectedCodeIndexedEvents);

  return (
    <Wrapper>
      <Header />
      <CardsWrapper>
        {indexedEvents?.map(({ id, order, index }) => (
          <EventIndexPreviewCard
            key={id}
            codeId={codeId}
            eventId={id}
            order={order}
            index={index}
            onClick={() => {
              console.log('에디터에 코드 & 인덱스 추가');
            }}
          />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 12rem;
  height: 100%;
  border-left: 0.1rem solid ${GREY[900]};
`;

const CardsWrapper = styled.div`
  height: calc(100% - 4.4rem);
  padding: 1.2rem;
  overflow-y: scroll;
  -ms-overflow-style: auto;
  &::-webkit-scrollbar {
    display: flex;
    width: 0.4rem;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #333;
  }
  padding-bottom: 4.4rem;
`;
