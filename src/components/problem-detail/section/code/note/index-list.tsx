import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Header from 'src/components/problem-detail/section/code/history/index-list/header';
import EventIndexPreviewCard from 'src/components/common/card/index-preview';
import { GREY } from 'src/constants/colors';

import { selectedProblemCodeId } from 'src/modules/atoms/code';
import { selectedCodeIndexedEvents } from 'src/modules/selectors/code';
import { useCodeNoteContext } from 'src/modules/context/code-note';

export default function CodeNoteIndexListSection() {
  const codeId = useRecoilValue(selectedProblemCodeId);
  const indexedEvents = useRecoilValue(selectedCodeIndexedEvents);
  const {
    action: { insertEventIndexData },
  } = useCodeNoteContext();

  const handleIndexCardClick = (index: string, modifiedText: string) => () => {
    if (confirm('에디터에 해당 인덱스 정보(코드, 메모)를 추가하시겠습니까?')) {
      insertEventIndexData(index, modifiedText);
    }
  };

  return (
    <Wrapper>
      <Header />
      <CardsWrapper>
        {indexedEvents?.map(({ id, order, index, modifiedText }) => (
          <EventIndexPreviewCard
            key={id}
            codeId={codeId}
            eventId={id}
            order={order}
            index={index}
            onClick={handleIndexCardClick(index, modifiedText)}
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
