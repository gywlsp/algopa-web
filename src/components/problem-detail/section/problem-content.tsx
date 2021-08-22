import React from 'react';
import styled from 'styled-components';

import { problemHtml } from 'src/data/problem';
import { GREY } from 'src/constants/colors';

export default function ProblemDetailContentSection() {
  return (
    <ProblemContent
      className="problem-content"
      dangerouslySetInnerHTML={{ __html: problemHtml }}
    />
  );
}

const ProblemContent = styled.section`
  flex: 1;
  height: 100%;
  border-right: 0.1rem solid ${GREY[900]};
`;
