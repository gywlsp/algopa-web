import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import Link from './link';
import { BLUE_GREEN, GREY, WHITE } from 'src/constants/colors';

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonType = 'primary' | 'secondary' | 'text';

export type ButtonProps = {
  size?: ButtonSize;
  type?: ButtonType;
  title: string;
  href?: string;
  isHrefExternal?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  disabled?: boolean;
  RightIcon?: ReactNode | ReactNodeArray;
  className?: string;
  block?: boolean;
  hasPadding?: boolean;
};

function Button({
  size = 'medium',
  type = 'text',
  title,
  href,
  isHrefExternal = false,
  onClick,
  disabled = false,
  RightIcon,
  className,
  block = false,
  hasPadding,
}: ButtonProps) {
  const _hasPadding = hasPadding || type !== 'text';

  if (href) {
    return isHrefExternal ? (
      <A href={href} target="_blank">
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
      </A>
    ) : (
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

export default React.memo(Button);

const Wrapper = styled.button<{
  size: ButtonSize;
  disabled: boolean;
  buttonType: ButtonType;
  block: boolean;
  hasPadding: boolean;
}>`
  ${({ size, disabled, buttonType, block, hasPadding }) => `
  width: ${block ? '100%' : 'fit-content'};
  height: ${{ large: '5.2rem', medium: '4rem', small: 'fit-content' }[size]};
  padding:  ${
    hasPadding || buttonType !== 'text'
      ? size === 'small'
        ? '0.5rem 0.8rem'
        : '1rem 1.6rem'
      : 0
  };
  font-size: ${{ large: '1.8rem', medium: '1.6rem', small: '1.4rem' }[size]};
  font-weight: ${size === 'large' ? 500 : 400};
  cursor: ${disabled ? 'default' : 'pointer'};
  color: ${
    (disabled && GREY[500]) ||
    (buttonType === 'primary' ? WHITE : BLUE_GREEN[700])
  };
  background-color: ${
    (disabled && GREY[300]) ||
    (buttonType === 'primary' ? BLUE_GREEN[500] : WHITE)
  };
  ${
    !disabled &&
    `&:hover {
    ${buttonType === 'primary' ? 'background-color' : 'color'}: ${
      BLUE_GREEN[700]
    }
  }`
  }
  border: ${
    disabled || buttonType === 'text' ? 'none' : `1px solid ${BLUE_GREEN[500]}`
  };
  &:hover {
    border-color: ${BLUE_GREEN[700]};
    ${
      !disabled &&
      `${buttonType === 'primary' ? 'background-color' : 'color'}: ${
        BLUE_GREEN[700]
      };`
    }
  }
`}
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 0.2rem;
  transition: all 0.3s;
`;

const StyledLink = styled(Link)<{
  size: ButtonSize;
  disabled: boolean;
  buttonType: ButtonType;
  block: boolean;
  hasPadding: boolean;
}>`
  ${({ size, disabled, buttonType, block, hasPadding }) => `
width: ${block ? '100%' : 'fit-content'};
height: ${{ large: '5.2rem', medium: '4rem', small: 'fit-content' }[size]};
padding:  ${
    hasPadding || buttonType !== 'text'
      ? size === 'small'
        ? '0.5rem 0.8rem'
        : '1rem 1.6rem'
      : 0
  };
font-size: ${{ large: '1.8rem', medium: '1.6rem', small: '1.4rem' }[size]};
font-weight: ${size === 'large' ? 500 : 400};
cursor: ${disabled ? 'default' : 'pointer'};
color: ${
    (disabled && GREY[500]) ||
    (buttonType === 'primary' ? WHITE : BLUE_GREEN[700])
  };
background-color: ${
    (disabled && GREY[300]) ||
    (buttonType === 'primary' ? BLUE_GREEN[500] : WHITE)
  };
${
  !disabled &&
  `&:hover {
  ${buttonType === 'primary' ? 'background-color' : 'color'}: ${BLUE_GREEN[700]}
}`
}
border: ${
    disabled || buttonType === 'text' ? 'none' : `1px solid ${BLUE_GREEN[500]}`
  };
&:hover {
  border-color: ${BLUE_GREEN[700]};
  ${
    !disabled &&
    `${buttonType === 'primary' ? 'background-color' : 'color'}: ${
      BLUE_GREEN[700]
    };`
  }
}
`}
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 0.2rem;
  transition: all 0.3s;
`;

const A = styled.a`
  text-decoration: none;
`;
