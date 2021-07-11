import React, { ReactNode, ReactNodeArray } from 'react';
import { default as _Link } from 'next/link';
import styled from 'styled-components';

export type LinkProps = {
  href: string;
  children: ReactNode | ReactNodeArray;
};

export default function Link({ href, children }: LinkProps) {
  return (
    <_Link href={href}>
      <A>{children}</A>
    </_Link>
  );
}

const A = styled.a`
  text-decoration: none;
`;
