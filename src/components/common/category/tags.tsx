import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import HorizontalScrollable from '../horizontal-scrollable';
import P from '../p';
import { BLUE_GREEN } from 'src/constants/colors';

import { IProblem } from 'src/interfaces/problem/IProblem';
import { isProblemCategoryShown } from 'src/modules/atoms/problem';

export type ProblemCategoryTagsProps = Pick<IProblem, 'categories'>;

  const isCategoryShown = useRecoilValue(isProblemCategoryShown);

  return (
    <HorizontalScrollable>
      {isCategoryShown &&
        categories?.map((category) => <Tag key={category}>#{category}</Tag>)}
    </HorizontalScrollable>
  );
}

const Tag = styled(P).attrs({
  level: 2,
})`
  color: ${BLUE_GREEN[400]};
  margin: 0.2rem 0.8rem 0 0;
  padding: 0.2rem 0.6rem;
  border: 1px solid ${BLUE_GREEN[400]};
  border-radius: 0.4rem;
`;
