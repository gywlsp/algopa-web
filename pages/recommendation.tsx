import React from 'react';

import GlobalLayout from 'src/layouts/global';
import Section from 'src/components/common/section';
import RecommendedProblemsSection from 'src/components/recommendation/problems-section';
import ProblemCategorySwitch from 'src/components/common/category/switch';

import { useRecentAuthTokens } from 'src/hooks/api/auth';
import { useMe } from 'src/hooks/api/user';

export default function ProblemRecommendationPage() {
  useRecentAuthTokens(true);
  const { data: userData, error } = useMe();

  if (error) {
    return <></>;
  }

  return (
    <GlobalLayout>
      <Section
        title={`${userData?.nickname || '회원'}님을 위한 추천 문제 🔍`}
        rightComponent={<ProblemCategorySwitch />}
      >
        <RecommendedProblemsSection type="next" />
        <RecommendedProblemsSection type="wrong" />
        <RecommendedProblemsSection type="less" />
      </Section>
    </GlobalLayout>
  );
}
