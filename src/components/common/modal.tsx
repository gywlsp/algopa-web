import React, { CSSProperties, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import P from './p';
import Button from './button';
import XIcon from 'src/assets/icons/x';
import { GREY, WHITE } from 'src/constants/colors';

export type Theme = 'dark' | 'light';
export type ModalSize = 'large' | 'default';

export type ModalProps = {
  size?: ModalSize;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  okText: string;
  onOk?: () => void;
  okHref?: string;
  isOkHrefExternal?: boolean;
  children: ReactNode | ReactNodeArray;
  contentWrapperStyle?: CSSProperties;
  theme?: Theme;
};

function Modal({
  size = 'default',
  title,
  isOpen,
  onClose,
  okText,
  okHref,
  isOkHrefExternal = false,
  onOk,
  children,
  contentWrapperStyle,
  theme = 'light',
}: ModalProps) {
  const handleWrapperClick = (e) => {
    e.stopPropagation();
  };

  const [color, backgroundColor, borderColor] =
    theme === 'light'
      ? [GREY[800], WHITE, GREY[400]]
      : [GREY[400], GREY[800], GREY[700]];

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <Wrapper
        size={size}
        isOpen={isOpen}
        onClick={handleWrapperClick}
        style={{ backgroundColor }}
      >
        <Header>
          <P level={5} fontWeight={500} color={color}>
            {title}
          </P>
          <CloseButton onClick={onClose}>
            <XIcon style={{ width: '1.8rem', height: '1.8rem' }} fill={color} />
          </CloseButton>
        </Header>
        <ContentWrapper
          style={{
            borderTop: `1px solid ${borderColor}`,
            borderBottom: `1px solid ${borderColor}`,
            ...contentWrapperStyle,
          }}
        >
          {children}
        </ContentWrapper>
        <Footer>
          <StyledButton type="secondary" title="닫기" onClick={onClose} />
          <StyledButton
            type="primary"
            title={okText}
            href={okHref}
            isHrefExternal={isOkHrefExternal}
            onClick={onOk}
          />
        </Footer>
      </Wrapper>
    </Overlay>
  );
}

export default React.memo(Modal);

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  width: 100%;
  ${({ isOpen }) =>
    isOpen
      ? 'height: 100vh; background-color: rgba(0, 0, 0, 0.3)'
      : 'height: auto; background-color: rgba(0, 0, 0, 0)'};
  transition: background-color 0.3s;
  transition: all 0.3s;
`;

const Wrapper = styled.div<{ isOpen: boolean; size: ModalSize }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: ${({ size }) => (size === 'large' ? 720 : 480)}px;
  z-index: 700;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
`;

const ContentWrapper = styled.div`
  padding: 2rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: flex-end;
  padding: 1.2rem 2rem;
`;

const StyledButton = styled(Button)`
  margin-left: 0.8rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
