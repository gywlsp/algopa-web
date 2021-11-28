import React from 'react';
import dynamic from 'next/dynamic';

const GlobalLayout = dynamic(() => import('src/layouts/global'));
const RecommendedProblemsSection = dynamic(
  () => import('src/components/recommendation/problems-section')
);
const ProblemCategorySwitch = dynamic(
  () => import('src/components/common/category/switch')
);
const Section = dynamic(() => import('src/components/common/section'));

import { useAuth } from 'src/hooks/auth';
import { useMe } from 'src/hooks/user';

export default function ProblemRecommendationPage() {
  useAuth({ isLoginRequired: true });
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
