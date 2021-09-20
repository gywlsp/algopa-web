import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';

import Link from 'src/components/common/link';
import P from 'src/components/common/p';
import ChevronRightIcon from 'src/assets/icons/chevron/right';
import { GREY, WHITE } from 'src/constants/colors';

export type MoreButtonProps = {
  isLoggedIn: boolean;
};

export default function MoreButton({ isLoggedIn }: MoreButtonProps) {
  const router = useRouter();

  const handleLogin = (e) => {
    if (isLoggedIn) {
      return;
    }
    e.preventDefault();
    alert('로그인이 필요한 기능입니다.');
    router.push('/login');
  };

  return (
    <Wrapper href="/recommendation" onClick={handleLogin}>
      <ChevronRightIcon
        style={{ width: '2rem', height: '2rem', margin: '1.2rem 0' }}
        fill={WHITE}
      />
      <StyledP level={4} color={WHITE}>
        더 보기
      </StyledP>
    </Wrapper>
  );
}

const StyledP = styled(P)`
  margin-bottom: 1.2rem;
`;

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 24rem;
  height: 27.2rem;
  padding: 2rem;
  border: 1px solid ${GREY[400]};
  background-color: rgba(0, 0, 0, 0.4);
`;
