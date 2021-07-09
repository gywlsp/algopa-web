import React from 'react';
import Link from 'next/link';

import { BLUE_GREEN } from 'src/constants/colors';
import styled from 'styled-components';

export default function Logo() {
  return (
    <Link href="/">
      <A>
        <LogoText>algopa</LogoText>
      </A>
    </Link>
  );
}

const A = styled.a`
  text-decoration: none;
`;

const LogoText = styled.p`
  font-family: 'Comfortaa';
  font-size: 2.8rem;
  color: ${BLUE_GREEN[500]};
  text-decoration: none;
`;
