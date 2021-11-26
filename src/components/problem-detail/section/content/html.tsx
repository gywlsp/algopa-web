import React from 'react';
import { useRecoilValue } from 'recoil';

import { problem } from 'src/modules/atoms/problem';

export default function ProblemSectionContentHTML() {
  const problemData = useRecoilValue(problem);

  return (
    <section
      className="problem-content"
      dangerouslySetInnerHTML={{ __html: problemData?.contentHTML }}
    />
  );
}
