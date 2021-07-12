import React from 'react';
import styled from 'styled-components';

import GlobalLayout from 'src/layouts/global';
import GoogleLoginButton from 'src/components/login/buttons/google';
import GithubLoginButton from 'src/components/login/buttons/github';
import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

export default function LoginPage() {
  return (
    <StyledGlobalLayout>
      <Wrapper>
        <Title level={7} fontWeight={500} color={GREY[800]}>
          로그인
        </Title>
        <GoogleLoginButton />
        <GithubLoginButton />
      </Wrapper>
    </StyledGlobalLayout>
  );
}

const StyledGlobalLayout = styled(GlobalLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 60rem;
  padding: 4rem 4rem 5.2rem;
  margin-top: 8rem;
  border: 0.1rem solid ${GREY[400]};
`;

const Title = styled(P)`
  margin-bottom: 6rem;
`;
