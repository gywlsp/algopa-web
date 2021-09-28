import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Header from './header';
import EventIndexPreviewCard from './card';
import { GREY } from 'src/constants/colors';

import { selectedProblemCodeId } from 'src/modules/atoms/code';
import { selectedCodeIndexedEvents } from 'src/modules/selectors/code';

export default function CodeHistoryIndexListSection() {
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
  padding: 1.2rem;
`;
