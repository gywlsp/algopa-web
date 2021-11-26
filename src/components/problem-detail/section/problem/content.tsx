import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import ProblemCategorySwitch from 'src/components/common/category/switch';
import ProblemCategoryTags from 'src/components/common/category/tags';
import { GREY } from 'src/constants/colors';

import { isProblemCategoryShown, problem } from 'src/modules/atoms/problem';

export default function ProblemSectionContent() {
  const isCategoryShown = useRecoilValue(isProblemCategoryShown);
  const problemData = useRecoilValue(problem);

  return (
    <Wrapper>
      <section
        className="problem-content"
        dangerouslySetInnerHTML={{ __html: problemData?.contentHTML }}
      />
      <CategorySwitch />
      {isCategoryShown && (
        <ProblemCategoryTags categories={problemData?.categories} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  background-color: #222;
  overflow-y: scroll;
  -ms-overflow-style: auto;
  padding: 1.2rem;
  border-right: 0.1rem solid ${GREY[900]};
  &::-webkit-scrollbar {
    display: flex;
    width: 0.4rem;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${GREY[800]};
  }
`;

const CategorySwitch = styled(ProblemCategorySwitch)`
  margin-bottom: 0.8rem;
`;
