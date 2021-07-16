import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import Link from './link';
import { BLUE_GREEN, GREY, WHITE } from 'src/constants/colors';

export type ButtonSize = 'large' | 'medium';
export type ButtonType = 'primary' | 'secondary' | 'text';

export type ButtonProps = {
  size?: ButtonSize;
  type?: ButtonType;
  title: string;
  href?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  disabled?: boolean;
  RightIcon?: ReactNode | ReactNodeArray;
  className?: string;
  block?: boolean;
  hasPadding?: boolean;
};

export default function Button({
  size = 'medium',
  type = 'text',
  title,
  href,
  onClick,
  disabled = false,
  RightIcon,
  className,
  block = false,
  hasPadding,
}: ButtonProps) {
  const _hasPadding = hasPadding || type !== 'text';

  if (href) {
    return (
      <StyledLink
        size={size}
        buttonType={type}
        href={href}
        onClick={onClick}
        disabled={disabled}
        className={className}
        block={block}
        hasPadding={_hasPadding}
      >
        {title}
        {RightIcon}
      </StyledLink>
    );
  }

  return (
    <Wrapper
      size={size}
      buttonType={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      block={block}
      hasPadding={_hasPadding}
    >
      {title}
      {RightIcon}
    </Wrapper>
  );
}

//@TO_BE_IMPROVED
const Wrapper = styled.button<{
  size: ButtonSize;
  disabled: boolean;
  buttonType: ButtonType;
  block: boolean;
  hasPadding: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ block }) => (block ? '100%' : 'fit-content')};
  ${({ size }) =>
    size === 'large'
      ? 'height: 5.2rem; font-size: 1.8rem; font-weight: 500;'
      : 'height: 4rem; font-size: 1.6rem; font-weight: 400;'}
  margin: 0;
  padding: ${({ hasPadding }) => (hasPadding ? '1rem 1.6rem' : 0)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ buttonType, disabled }) =>
    disabled
      ? `color: ${GREY[500]};
    background-color: ${GREY[300]};`
      : buttonType === 'primary'
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
  border: ${({ buttonType, disabled }) =>
    disabled || buttonType === 'text'
      ? 'none'
      : `1px solid ${BLUE_GREEN[500]}`};
  border-radius: 0.2rem;
  &:hover {
    border-color: ${BLUE_GREEN[700]};
  }
  transition: all 0.3s;
`;

const StyledLink = styled(Link)<{
  size: ButtonSize;
  disabled: boolean;
  buttonType: ButtonType;
  block: boolean;
  hasPadding: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ block }) => (block ? '100%' : 'fit-content')};
  ${({ size }) =>
    size === 'medium'
      ? 'height: 4rem; font-size: 1.6rem; font-weight: 400;'
      : 'height: 5.2rem; font-size: 1.8rem; font-weight: 500;'}
  margin: 0;
  padding: ${({ hasPadding }) => (hasPadding ? '1rem 1.6rem' : 0)};
  font-size: 1.6rem;
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
