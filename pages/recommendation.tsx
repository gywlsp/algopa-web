import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

import GlobalLayout from 'src/layouts/global';
import Section from 'src/components/common/section';
import RecommendedProblemsSection from 'src/components/recommendation/problems-section';

import { useMe } from 'src/hooks/api/user';

export default function RecommendationPage() {
  const router = useRouter();
  const { data: userData, error } = useMe();

  useEffect(() => {
    if (error) {
      alert('로그인이 필요한 기능입니다.');
      router.push('/login');
    }
  }, [error]);

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
