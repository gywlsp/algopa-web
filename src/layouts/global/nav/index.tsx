import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalNavDropdown from './dropdown';
import CompanyRadio from 'src/components/common/company-radio';
import Button from 'src/components/common/button';
import ChevronDownIcon from 'src/assets/icons/chevron/down';
import ChevronUpIcon from 'src/assets/icons/chevron/up';
import { BLUE_GREEN } from 'src/constants/colors';

import { useMe } from 'src/hooks/user';

export default function GlobalNav() {
  const { data: userData } = useMe();
  const [isDropdownOpened, setDropdownOpened] = useState(false);

  const ChevronIcon = isDropdownOpened ? ChevronUpIcon : ChevronDownIcon;

  const toggleDropdown = () => {
    setDropdownOpened(!isDropdownOpened);
  };

  return (
    <Wrapper>
      <Ul>
        {userData && (
          <>
            <CompanyRadio />
            <Li>
              <Button
                title={userData?.nickname}
                RightIcon={
                  <ChevronIcon
                    style={{
                      width: '1.2rem',
                      height: '1.2rem',
                      marginLeft: '0.8rem',
                    }}
                    fill={BLUE_GREEN[500]}
                  />
                }
                onClick={toggleDropdown}
              />
            </Li>
            {isDropdownOpened && <GlobalNavDropdown />}
          </>
        )}
        {!userData && (
          <Li>
            <Button title="로그인" href="/login" />
          </Li>
        )}
      </Ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  margin-left: auto;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  margin: 0.8rem 1.6rem;
`;
