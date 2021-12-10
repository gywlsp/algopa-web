import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Button from 'src/components/common/button';

import { CodeSectionType } from 'src/modules/atoms/problem';
import { BLUE_GREEN } from 'src/constants/colors';

import { useCodeRunContext } from 'src/modules/context/code-run';

export default function CodeSubmitButton() {
  const codeSectionType = useRecoilValue(CodeSectionType);
  const {
    action: { submitCode },
  } = useCodeRunContext();

  const confirmCodeSubmit = () => {
    return confirm('코드를 제출하고 채점하시겠습니까?');
  };

  const handleClick = useCallback(async () => {
    confirmCodeSubmit() && (await submitCode());
  }, [confirmCodeSubmit, submitCode]);

  if (codeSectionType !== 'edit') {
    return <></>;
  }

  return (
    <StyledButton
      onClick={handleClick}
      size="small"
      type="primary"
      title="채점하기"
      hasPadding
    />
  );
}

const StyledButton = styled(Button)`
  margin-left: 1.2rem;
  background-color: ${BLUE_GREEN[600]};
  border: 1px solid ${BLUE_GREEN[600]};
  cursor: pointer;
`;
