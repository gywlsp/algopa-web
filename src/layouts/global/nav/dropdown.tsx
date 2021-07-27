import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';

import Button from 'src/components/common/button';

import { removeCookie } from 'src/lib/utils/cookie';

export default function GlobalNavDropdown() {
  const router = useRouter();

  const logout = () => {
    removeCookie('ACCESS_TOKEN');
    removeCookie('REFRESH_TOKEN');
    router.reload();
    alert('로그아웃되었습니다.');
  };

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
