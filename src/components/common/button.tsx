import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import Link from './link';
import { BLUE_GREEN, WHITE } from 'src/constants/colors';

type ButtonType = 'primary' | 'secondary' | 'text';

export type ButtonProps = {
  type?: ButtonType;
  title: string;
  href?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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
        buttonType={type}
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
    <Wrapper
      buttonType={type}
      hasPadding={_hasPadding}
      onClick={onClick}
      className={className}
    >
      {title}
      {RightIcon}
    </Wrapper>
  );
}

const Wrapper = styled.button<{ buttonType: ButtonType; hasPadding: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${({ hasPadding }) => (hasPadding ? '1rem 1.6rem' : 0)};
  font-size: 1.6rem;
  font-weight: 400;
  cursor: pointer;
  ${({ buttonType }) =>
    buttonType === 'primary'
      ? `color: ${WHITE};
    background-color: ${BLUE_GREEN[500]};
    &:hover {
      background-color: ${BLUE_GREEN[700]}
    }`
      : `color: ${BLUE_GREEN[500]};
    background-color: ${WHITE};
    &:hover {
      color: ${BLUE_GREEN[700]}
    }`};
  border: ${({ buttonType }) =>
    buttonType === 'text' ? 'none' : `1px solid ${BLUE_GREEN[500]}`};
  border-radius: 0.2rem;
  &:hover {
    border-color: ${BLUE_GREEN[700]};
  }
  transition: all 0.3s;
`;

const StyledLink = styled(Link)<{
  buttonType: ButtonType;
  hasPadding: boolean;
}>`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${({ hasPadding }) => (hasPadding ? '1rem 1.6rem' : 0)};
  font-size: 1.6rem;
  font-weight: 400;
  cursor: pointer;
  ${({ buttonType }) =>
    buttonType === 'primary'
      ? `color: ${WHITE};
  background-color: ${BLUE_GREEN[500]};
  &:hover {
    background-color: ${BLUE_GREEN[700]}
  }`
      : `color: ${BLUE_GREEN[500]};
  background-color: ${WHITE};
  &:hover {
    color: ${BLUE_GREEN[700]}
  }`};
  border: ${({ buttonType }) =>
    buttonType === 'text' ? 'none' : `1px solid ${BLUE_GREEN[500]}`};
  border-radius: 0.2rem;
  &:hover {
    border-color: ${BLUE_GREEN[700]};
  }
  transition: all 0.3s;
`;
