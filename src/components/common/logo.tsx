import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Img from 'src/components/common/img';

export type LogoSize = 'large' | 'medium' | 'small';

export type LogoProps = {
  size?: LogoSize;
  className?: string;
};

const LOGO_IMG_HEIGHT = {
  small: '2.4rem',
  medium: '2.8rem',
  large: '4.8rem',
};

function Logo({ size = 'medium', className }: LogoProps) {
  return (
    <Link href="/">
      <A className={className}>
        <Img
          src="/images/logo/horizontal-line.png"
          alt="logo"
          height={LOGO_IMG_HEIGHT[size]}
        />
      </A>
    </Link>
  );
}

export default React.memo(Logo);

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
