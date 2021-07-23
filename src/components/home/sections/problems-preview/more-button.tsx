import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';

import Link from 'src/components/common/link';
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
      <P>더 보기</P>
    </Wrapper>
  );
}

const P = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: ${WHITE};
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
