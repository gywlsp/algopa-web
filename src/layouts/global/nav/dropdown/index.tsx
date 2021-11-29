import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';

import Button from 'src/components/common/button';

import { removeAuthCookie } from 'src/lib/utils/auth';
import { useAuthTokens } from 'src/hooks/auth';

export default function GlobalNavDropdown() {
  const router = useRouter();
  const { removeAuthTokens } = useAuthTokens();

  const logout = useCallback(() => {
    removeAuthCookie();
    removeAuthTokens();
    router.reload();
    alert('로그아웃되었습니다.');
  }, []);

  return (
    <Wrapper>
      <Li>
        <Button title="로그아웃" hasPadding onClick={logout} />
      </Li>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  position: absolute;
  right: 5.2rem;
  top: 4.8rem;
  box-shadow: 0 2px 16px 0 rgb(0 0 0 / 10%);
`;

const Li = styled.li``;
