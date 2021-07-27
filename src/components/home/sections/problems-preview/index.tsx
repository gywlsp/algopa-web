import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Section from 'src/components/common/section';
import Link from 'src/components/common/link';
import ProblemCard from 'src/components/common/card/problem';
import MoreButton from './more-button';
import { GREY, WHITE } from 'src/constants/colors';

import { useProblemList } from 'src/hooks/api/problem';
import { userState } from 'src/atoms/user';

export default function ProblemsPreviewSection() {
  const { data: recommendedProblems } = useProblemList({ limit: 4 });
  const userData = useRecoilValue(userState);

  const sectionTitle = userData
    ? `${userData.nickname}님을 위한 추천 문제`
    : '이런 문제 어때요?';

  return (
    <Wrapper title={sectionTitle}>
      <CardsWrapper>
        <MoreButton isLoggedIn={!!userData} />
        {recommendedProblems?.reverse().map((problem, i) => (
          <ProblemCard key={i} {...problem} />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Section)`
  margin-bottom: 4rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 27.2rem;
  overflow-y: hidden;
`;

const P = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: ${WHITE};
`;

const MoreLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 24rem;
  height: 27.2rem;
  padding: 2rem;
  border: 1px solid ${GREY[400]};
  background-color: rgba(0, 0, 0, 0.4);
`;
