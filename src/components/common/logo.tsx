import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import P from './p';
import { BLUE_GREEN } from 'src/constants/colors';

export type LogoSize = 'large' | 'medium';

export type LogoProps = {
  size?: LogoSize;
  className?: string;
};

export default function Logo({ size = 'medium', className }: LogoProps) {
  return (
    <Link href="/">
      <A className={className}>
        <LogoText level={size === 'large' ? 25 : 9} color={BLUE_GREEN[500]}>
          algopa
        </LogoText>
      </A>
    </Link>
  );
}

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const LogoText = styled(P)`
  font-family: 'Comfortaa';
`;
