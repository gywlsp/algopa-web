import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

import { IProblem } from 'src/interfaces/problem/IProblem';
import Skeleton from '../common/skeleton';

export type ProblemDetailContentSectionProps = Pick<IProblem, 'contentHTML'>;

export default function ProblemContentSkeleton() {
  return (
    <Wrapper>
      <DarkSkeleton width="9rem" height="3.2rem" mb="1.6rem" />
      <Row>
        {[...Array(3)].map((_, i) => (
          <Box key={i}>
            <DarkSkeleton width="6rem" height="2.4rem" mb="0.8rem" />
            <DarkSkeleton width="3rem" height="2.4rem" />
          </Box>
        ))}
      </Row>
      <DarkSkeleton width="3.6rem" height="2.4rem" mb="1.6rem" />
      {[...Array(4)].map((_, i) => (
        <React.Fragment key={i}>
          <DarkSkeleton width="100%" height="2rem" mb="0.8rem" />
          <DarkSkeleton width="100%" height="2rem" mb="0.8rem" />
          <DarkSkeleton width="100%" height="2rem" mb="0.8rem" />
          <DarkSkeleton width="9rem" height="2rem" mb="0.8rem" />
        </React.Fragment>
      ))}
      <DarkSkeleton width="12rem" height="2.4rem" mb="1.2rem" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 34%;
  height: 100%;
  border-right: 0.1rem solid ${GREY[900]};
  padding: 1.2rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

const Box = styled.div`
  flex: 1;
`;

const DarkSkeleton = styled(Skeleton).attrs({ theme: 'dark' })``;
