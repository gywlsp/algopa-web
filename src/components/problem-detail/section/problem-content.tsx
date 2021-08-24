import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

import { IProblem } from 'src/interfaces/problem/IProblem';

export type ProblemDetailContentSectionProps = Pick<IProblem, 'contentHTML'>;

function ProblemDetailContentSection({
  contentHTML,
}: ProblemDetailContentSectionProps) {
  return (
    <ProblemContent
      className="problem-content"
      dangerouslySetInnerHTML={{ __html: contentHTML }}
    />
  );
}

export default React.memo(ProblemDetailContentSection);

const ProblemContent = styled.section`
  flex: 1;
  height: 100%;
  border-right: 0.1rem solid ${GREY[900]};
`;
