import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import GlobalNavDropdown from './dropdown';
import Button from 'src/components/common/button';
import ChevronDownIcon from 'src/assets/icons/chevron/down';
import ChevronUpIcon from 'src/assets/icons/chevron/up';
import { BLUE_GREEN } from 'src/constants/colors';

import { userState } from 'src/atoms/user';

export default function GlobalNav() {
  const userData = useRecoilValue(userState);

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
            {/* <Li>
              <Button title="대시보드" href="/dashboard" />
            </Li> */}
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
