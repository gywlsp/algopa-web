import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { GREY } from 'src/constants/colors';

import { problem } from 'src/modules/atoms/problem';

export default function ProblemDetailContentSection() {
  const problemData = useRecoilValue(problem);

  return (
    <ProblemContent
      className="problem-content"
      dangerouslySetInnerHTML={{ __html: problemData?.contentHTML }}
    />
  );
}

const ProblemContent = styled.section`
  flex: 1;
  height: 100%;
  border-right: 0.1rem solid ${GREY[900]};
`;
