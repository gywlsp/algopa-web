import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const GlobalNavDropdown = dynamic(() => import('./index'));
import Button from 'src/components/common/button';
import ChevronDownIcon from 'src/assets/icons/chevron/down';
import ChevronUpIcon from 'src/assets/icons/chevron/up';
import { BLUE_GREEN } from 'src/constants/colors';

import { useMe } from 'src/hooks/user';

export default function DropdownToggleButton() {
  const { data: userData } = useMe();
  const [isDropdownOpened, setDropdownOpened] = useState(false);

  const ChevronIcon = isDropdownOpened ? ChevronUpIcon : ChevronDownIcon;

  const toggleDropdown = useCallback(() => {
    setDropdownOpened(!isDropdownOpened);
  }, [isDropdownOpened]);

  return (
    <>
      <StyledButton
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
      {isDropdownOpened && <GlobalNavDropdown />}
    </>
  );
}

const StyledButton = styled(Button)`
  margin: 0.8rem 1.6rem;
`;
