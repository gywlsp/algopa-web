import React from 'react';
import styled from 'styled-components';

import Img from 'src/components/common/img';
import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

export type LoginButtonProps = {
  href: string;
  serviceImgSrc: string;
  serviceName: string;
};

export default function LoginButton({
  href,
  serviceImgSrc,
  serviceName,
}: LoginButtonProps) {
  return (
    <Wrapper href={href}>
      <Logo src={serviceImgSrc} alt={serviceName} width="4rem" height="4rem" />
      <StyledP level={2} textAlign="center">
        {serviceName} 계정으로 로그인
      </StyledP>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${GREY[400]};
  background: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border: 1px solid ${GREY[500]};
  }
  margin-bottom: 2.4rem;
  text-decoration: none;
`;

const Logo = styled(Img)`
  padding: 0.4rem;
  border-right: 1px solid ${GREY[400]};
  transition: all 0.3s;
  ${Wrapper}:hover & {
    border-right: 1px solid ${GREY[500]};
  }
`;

const StyledP = styled(P)`
  width: 100%;
`;
