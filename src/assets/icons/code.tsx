import React from 'react';

import { BLUE_GREEN } from 'src/constants/colors';
import styled from 'styled-components';
import { IconProps } from '../icons';

export default function CodeIcon({
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
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </Svg>
  );
}

const Svg = styled.svg`
  &:hover {
    fill: ${BLUE_GREEN[400]};
    transition: all 0.2s;
  }
`;
