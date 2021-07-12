import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import Link from './link';
import { BLUE_GREEN, WHITE } from 'src/constants/colors';

type ButtonType = 'primary' | 'secondary' | 'text';

export type ButtonProps = {
  type?: ButtonType;
  title: string;
  href?: string;
  onClick?: () => void;
  RightIcon?: ReactNode | ReactNodeArray;
  className?: string;
  hasPadding?: boolean;
};

export default function Button({
  type = 'text',
  title,
  href,
  onClick,
  RightIcon,
  className,
  hasPadding,
}: ButtonProps) {
  const _hasPadding = hasPadding || type !== 'text';

  if (href) {
    return (
      <StyledLink
        href={href}
        onClick={onClick}
        hasPadding={_hasPadding}
        className={className}
      >
        {title}
        {RightIcon}
      </StyledLink>
    );
  }

  return (
    <Wrapper hasPadding={_hasPadding} onClick={onClick} className={className}>
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

const StyledLink = styled(Link)<{ hasPadding: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${({ hasPadding }) => (hasPadding ? '0.8rem 1.6rem' : 0)};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${BLUE_GREEN[500]};
  background-color: ${WHITE};
  transition: all 0.3s;
  &:hover {
    color: ${BLUE_GREEN[900]};
  }
`;
