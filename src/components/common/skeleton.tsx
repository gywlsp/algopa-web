import React from 'react';
import styled, { keyframes } from 'styled-components';

const skeletonKeyframes = keyframes`
0% {
  background-position: -200px 0;
}
50%, 100% {
  background-position: calc(200px + 100%) 0;
}
`;

type SkeletonProps = {
  width: string;
  height: string;
  circle?: boolean;
  style?: React.CSSProperties;
  mb?: string;
  mr?: string;
  ml?: string;
  br?: string;
};

export const defaultBaseColor = '#F0F0F0';

export const defaultHighlightColor = '#FBFBFB';

const DURATION = 4;

export default function Skeleton(props: SkeletonProps) {
  return <Box {...props} />;
}

const Box = styled.div<SkeletonProps>`
  background-color: ${defaultBaseColor};
  background-image: linear-gradient(
    90deg,
    ${defaultBaseColor},
    ${defaultHighlightColor},
    ${defaultBaseColor}
  );
  animation: ${skeletonKeyframes} ${DURATION}s ease-in-out infinite;
  background-size: 200px 100%;
  background-repeat: no-repeat;
  ${(props) => `
    width: ${props.width};
    height: ${props.height};
    margin-bottom: ${props.mb};
    margin-right: ${props.mr};
    margin-left: ${props.ml};
    ${props.circle ? 'border-radius:50%;' : ''}
    border-radius: ${props.br};
    `}
`;
