import React, { ReactNode, ReactNodeArray } from 'react';
import { default as _Link } from 'next/link';
import styled from 'styled-components';

export type LinkProps = {
  href: string;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: ReactNode | ReactNodeArray;
  className?: string;
};

function Link({ href, onClick, children, className }: LinkProps) {
  return (
    <_Link href={href}>
      <A className={className} onClick={onClick}>
        {children}
      </A>
    </_Link>
  );
}

export default React.memo(Link);

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
