import React from 'react';
import { useRouter } from 'next/router';

import ProblemContent from 'src/components/problem-detail/section/problem/content';
import ProblemContentSkeleton from 'src/components/skeletons/problem-content';

import { useProblem } from 'src/hooks/api/problem';

export default function ProblemSection() {
  const router = useRouter();
  const { data } = useProblem(+router.query.id);

  return data ? <ProblemContent /> : <ProblemContentSkeleton />;
}
