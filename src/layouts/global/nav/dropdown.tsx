import React from 'react';
import styled from 'styled-components';

import Button from 'src/components/common/button';

export default function GlobalNavDropdown() {
  return (
    <Wrapper>
      <Li>
        <Button title="로그아웃" hasPadding />
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
