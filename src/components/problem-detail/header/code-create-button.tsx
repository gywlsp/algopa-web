import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Button from 'src/components/common/button';
import { BLUE_GREEN } from 'src/constants/colors';

import CodeService from 'src/services/api/code';
import { problem } from 'src/modules/atoms/problem';

export default function CodeCreateButton() {
  const problemData = useRecoilValue(problem);

  const confirmCodeCreate = () => {
    return confirm('문제를 새로 푸시겠습니까?');
  };

  const createCode = async () => {
    try {
      await CodeService.create(problemData?.id);
    } catch (err) {
      alert('코드 생성 실패');
    }
  };

  const handleButtonClick = useCallback(async () => {
    confirmCodeCreate() && createCode();
  }, [problemData?.id]);

  return (
    <StyledButton
      onClick={handleButtonClick}
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
