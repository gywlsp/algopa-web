import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import P from './p';
import { BLUE_GREEN } from 'src/constants/colors';

export type LogoSize = 'large' | 'medium' | 'small';

export type LogoProps = {
  size?: LogoSize;
  className?: string;
};

const LOGO_TEXT_LEVEL = {
  small: 6,
  medium: 9,
  large: 25,
};

function Logo({ size = 'medium', className }: LogoProps) {
  return (
    <Link href="/">
      <A className={className}>
        <LogoText level={LOGO_TEXT_LEVEL[size]} color={BLUE_GREEN[500]}>
          algopa
        </LogoText>
      </A>
    </Link>
  );
}

export default React.memo(Logo);

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const LogoText = styled(P)`
  font-family: 'Comfortaa';
`;
