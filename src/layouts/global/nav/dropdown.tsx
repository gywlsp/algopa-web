import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import Button from 'src/components/common/button';

import { userState } from 'src/atoms/user';

export default function GlobalNavDropdown() {
  const setUser = useSetRecoilState(userState);
  const logout = () => {
    setUser(null);
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
  position: fixed;
  right: 5.2rem;
  top: 4.8rem;
  box-shadow: 0 2px 16px 0 rgb(0 0 0 / 10%);
`;

const Li = styled.li``;
