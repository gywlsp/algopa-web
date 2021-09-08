import React from 'react';

import GlobalLayout from 'src/layouts/global';
import Section from 'src/components/common/section';
import RecommendedProblemsSection from 'src/components/recommendation/problems-section';

import { useMe } from 'src/hooks/api/user';

export default function RecommendationPage() {
  const { data: userData, error } = useMe({ isLoginRequired: true });

  if (error) {
    return <></>;
  }

  return (
    <GlobalLayout>
      <Section title={`${userData?.nickname || '회원'}님을 위한 추천 문제`}>
        <RecommendedProblemsSection type="next" />
        <RecommendedProblemsSection type="wrong" />
        <RecommendedProblemsSection type="less" />
      </Section>
    </GlobalLayout>
  );
}
