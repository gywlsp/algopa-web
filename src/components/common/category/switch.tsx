import React from 'react';
import Switch from 'react-switch';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { BLUE_GREEN, GREY } from 'src/constants/colors';

import { isProblemCategoryShown } from 'src/modules/atoms/problem';

export type ProblemCategorySwitchProps = {
  className?: string;
};

export default function ProblemCategorySwitch({
  className,
}: ProblemCategorySwitchProps) {
  const [isCategoryShown, setCategoryShown] = useRecoilState(
    isProblemCategoryShown
  );

  const toggleCategoryShown = () => {
    setCategoryShown(!isCategoryShown);
  };

  return (
    <Wrapper className={className}>
      <Title>유형 보기</Title>
      <Switch
        onChange={toggleCategoryShown}
        checked={isCategoryShown}
        onColor={BLUE_GREEN[200]}
        onHandleColor={BLUE_GREEN[400]}
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
    </Wrapper>
  );
}

const Wrapper = styled.label`
  display: flex;
  align-items: center;
`;

const Title = styled(P).attrs({ level: 3, color: GREY[500] })`
  margin-right: 0.8rem;
  margin-bottom: 0.2rem;
`;
