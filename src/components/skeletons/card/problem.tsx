import React from 'react';
import styled from 'styled-components';

import Skeleton from 'src/components/common/skeleton';
import { GREY } from 'src/constants/colors';

export type ProblemCardSkeletonProps = {
  isLast: boolean;
};

export default function ProblemCardSkeleton({
  isLast,
}: ProblemCardSkeletonProps) {
  return (
    <Wrapper isLast={isLast}>
      <Skeleton width="100%" height="14rem" mb="2rem" />
      <Skeleton width="10rem" height="2.4rem" mb="1.2rem" />
      <Skeleton width="12rem" height="2.4rem" mb="1.2rem" />
    </Wrapper>
  );
}

const Wrapper = styled.div<ProblemCardSkeletonProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 22.4rem;
  height: 27.2rem;
  margin-right: ${({ isLast }) => (isLast ? 0 : '1.2rem')};
  padding: 2rem 2rem 1.2rem;
  border: 1px solid ${GREY[400]};
`;
