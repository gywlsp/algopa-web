import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const CompanyRadio = dynamic(
  () => import('src/components/common/company-radio')
);
const DropdownToggleButton = dynamic(() => import('./dropdown/toggle-button'));
import Button from 'src/components/common/button';

import { useMe } from 'src/hooks/user';

export default function GlobalNav() {
  const { data: userData } = useMe();

  return (
    <Wrapper>
      {userData && (
        <>
          <CompanyRadio />
          <DropdownToggleButton />
        </>
      )}
      {!userData && <StyledButton title="로그인" href="/login" />}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const StyledButton = styled(Button)`
  margin: 0.8rem 1.6rem;
`;
