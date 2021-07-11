import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { BLUE_GREEN, WHITE } from 'src/constants/colors';

type ButtonType = 'primary' | 'secondary' | 'text';

export type ButtonProps = {
  type?: ButtonType;
  title: string;
  href?: string;
  onClick?: () => void;
  RightIcon?: ReactNode | ReactNodeArray;
  wrapperStyle?: React.CSSProperties;
  hasPadding?: boolean;
};

export default function Button({
  type = 'text',
  title,
  href,
  onClick,
  RightIcon,
  wrapperStyle = {},
  hasPadding,
}: ButtonProps) {
  const _hasPadding = hasPadding || type !== 'text';

  if (href) {
    return (
      <Link href={href}>
        <A hasPadding={_hasPadding} onClick={onClick} style={wrapperStyle}>
          {title}
          {RightIcon}
        </A>
      </Link>
    );
  }

  return (
    <Wrapper hasPadding={_hasPadding} onClick={onClick} style={wrapperStyle}>
      {title}
      {RightIcon}
    </Wrapper>
  );
}

const Wrapper = styled.button<{ hasPadding: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${({ hasPadding }) => (hasPadding ? '0.8rem 1.6rem' : 0)};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${BLUE_GREEN[500]};
  background-color: ${WHITE};
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${BLUE_GREEN[900]};
  }
`;

const A = styled.a<{ hasPadding: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${({ hasPadding }) => (hasPadding ? '0.8rem 1.6rem' : 0)};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${BLUE_GREEN[500]};
  background-color: ${WHITE};
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${BLUE_GREEN[900]};
  }
  text-decoration: none;
`;
