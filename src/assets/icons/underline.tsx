import React from 'react';

import { BLUE_GREEN } from 'src/constants/colors';
import styled from 'styled-components';
import { IconProps } from '../icons';

export default function UnderlineIcon({
  style = {},
  fill = BLUE_GREEN[200],
}: IconProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '1.8rem', height: '1.8rem', ...style }}
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
    </Svg>
  );
}

const Svg = styled.svg`
  &:hover {
    fill: ${BLUE_GREEN[400]};
    transition: all 0.2s;
  }
`;
