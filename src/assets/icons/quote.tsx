import React from 'react';

import { BLUE_GREEN } from 'src/constants/colors';
import styled from 'styled-components';
import { IconProps } from '../icons';

export default function QuoteIcon({
  style = {},
  fill = BLUE_GREEN[200],
}: IconProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '2rem', height: '2rem', ...style }}
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </Svg>
  );
}

const Svg = styled.svg`
  &:hover {
    fill: ${BLUE_GREEN[400]};
    transition: all 0.2s;
  }
`;
