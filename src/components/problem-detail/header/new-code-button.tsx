import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import Button from 'src/components/common/button';
import { BLUE_GREEN } from 'src/constants/colors';

import CodeService from 'src/services/api/code';
import {
  problem,
  problemPageRightSectionType,
} from 'src/modules/atoms/problem';

export default function NewCodeButton() {
  const resetRightSectionType = useResetRecoilState(
    problemPageRightSectionType
  );
  const problemData = useRecoilValue(problem);

  const createNewCode = async () => {
    if (!confirm('문제를 새로 푸시겠습니까?')) {
      return;
    }
    try {
      await CodeService.create(problemData?.id);
      resetRightSectionType();
    } catch (err) {
      alert('코드 생성 실패');
    }
  };

  return (
    <StyledButton
      onClick={createNewCode}
      size="small"
      type="primary"
      title="새로 풀기"
      hasPadding
    />
  );
}

const StyledButton = styled(Button)`
  margin-left: 1.2rem;
  background-color: ${BLUE_GREEN[700]};
  cursor: pointer;
`;
