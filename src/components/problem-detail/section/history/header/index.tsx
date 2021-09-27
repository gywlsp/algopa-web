import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import NoteViewButton from './note-view-button';
import P from 'src/components/common/p';
import ChevronLeftIcon from 'src/assets/icons/chevron/left';
import { GREY, WHITE } from 'src/constants/colors';

import { problemPageRightSectionType } from 'src/modules/atoms/problem';

export default function CodeHistorySectionHeader() {
  const setRightSectionType = useSetRecoilState(problemPageRightSectionType);

  const handleBackButtonClick = () => {
    setRightSectionType('code');
  };

  return (
    <Wrapper>
      <BackButton onClick={handleBackButtonClick}>
        <ChevronLeftIcon
          style={{ width: '1.2rem', height: '1.2rem' }}
          fill={WHITE}
        />
      </BackButton>
      <Title>풀이 내역</Title>
      <NoteViewButton />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  padding: 1.2rem;
  border-bottom: 0.1rem solid ${GREY[900]};
`;

const BackButton = styled.button`
  height: 1.2rem;
  padding: 0;
  border: none;
  background: none;
  margin-right: 0.4rem;
`;

const Title = styled(P).attrs({ level: 2, color: GREY[400], fontWeight: 500 })`
  margin-right: auto;
`;
