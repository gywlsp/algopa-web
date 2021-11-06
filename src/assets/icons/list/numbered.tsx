import React from 'react';

import { BLUE_GREEN } from 'src/constants/colors';
import styled from 'styled-components';
import { IconProps } from '../../icons';

export default function NumberedListIcon({
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
      <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z" />
    </Svg>
  );
}

const Svg = styled.svg`
  &:hover {
    fill: ${BLUE_GREEN[400]};
    transition: all 0.2s;
  }
`;
