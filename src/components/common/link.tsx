import React, { ReactNode, ReactNodeArray, CSSProperties } from 'react';
import { default as _Link } from 'next/link';
import styled from 'styled-components';

export type LinkProps = {
  href: string;
  children: ReactNode | ReactNodeArray;
  wrapperStyle?: CSSProperties;
};

export default function Link({ href, children, wrapperStyle }: LinkProps) {
  return (
    <_Link href={href}>
      <A style={wrapperStyle}>{children}</A>
    </_Link>
  );
}

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
