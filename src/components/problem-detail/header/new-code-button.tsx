import React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Button from 'src/components/common/button';

import CodeService from 'src/services/api/code';
import {
  problem,
  problemPageRightSectionType,
} from 'src/modules/atoms/problem';

export default function NewCodeButton() {
  const setRightSectionType = useSetRecoilState(problemPageRightSectionType);
  const problemData = useRecoilValue(problem);

  const createNewCode = async () => {
    if (!confirm('문제를 새로 푸시겠습니까?')) {
      return;
    }
    try {
      setRightSectionType('code');
      await CodeService.create(problemData?.id);
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
  cursor: pointer;
`;
