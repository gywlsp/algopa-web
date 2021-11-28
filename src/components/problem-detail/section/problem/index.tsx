import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const ProblemContent = dynamic(
  () => import('src/components/problem-detail/section/problem/content')
);
import ProblemContentSkeleton from 'src/components/skeletons/problem-content';

import { useProblem } from 'src/hooks/problem';

export default function ProblemSection() {
  const router = useRouter();
  const { data } = useProblem(+router.query.id);

  return data ? <ProblemContent /> : <ProblemContentSkeleton />;
}
