import React, { CSSProperties, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import P from './p';
import Button from './button';
import XIcon from 'src/assets/icons/x';
import { GREY, WHITE } from 'src/constants/colors';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  okText: string;
  onOk?: () => void;
  okHref?: string;
  isOkHrefExternal?: boolean;
  children: ReactNode | ReactNodeArray;
  contentWrapperStyle?: CSSProperties;
};

export default function Modal({
  isOpen,
  onClose,
  okText,
  okHref,
  isOkHrefExternal = false,
  onOk,
  children,
  contentWrapperStyle,
}: ModalProps) {
  const handleWrapperClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <Wrapper isOpen={isOpen} onClick={handleWrapperClick}>
        <Header>
          <P level={5} fontWeight={500}>
            문제 상세
          </P>
          <CloseButton onClick={onClose}>
            <XIcon style={{ width: '1.8rem', height: '1.8rem' }} />
          </CloseButton>
        </Header>
        <ContentWrapper style={contentWrapperStyle}>{children}</ContentWrapper>
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

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 480px;
  z-index: 700;
  background-color: ${WHITE};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
`;

const ContentWrapper = styled.div`
  padding: 2rem;
  border-top: 1px solid ${GREY[400]};
  border-bottom: 1px solid ${GREY[400]};
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
