import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Button from 'src/components/common/button';

import { problemPageRightSectionType } from 'src/modules/atoms/problem';
import { BLUE_GREEN } from 'src/constants/colors';
import { useCodeRun } from 'src/hooks/api/code';

export default function CodeSubmitButton() {
  const rightSectionType = useRecoilValue(problemPageRightSectionType);
  const { onCodeSubmit } = useCodeRun();

  const submitCode = async () => {
    if (!confirm('코드를 제출하고 채점하시겠습니까?')) {
      return;
    }
    await onCodeSubmit();
  };

  if (rightSectionType !== 'code') {
    return <></>;
  }

  return (
    <StyledButton
      onClick={submitCode}
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
