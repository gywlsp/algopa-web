import React from 'react';
import styled from 'styled-components';

import Button from 'src/components/common/button';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import CodeService from 'src/services/api/code';

export type NewCodeButtonProps = Pick<IProblemReadDTO, 'id'>;

export default function NewCodeButton({ id }: NewCodeButtonProps) {
  const createNewCode = async () => {
    if (!confirm('문제를 새로 푸시겠습니까?')) {
      return;
    }
    try {
      await CodeService.create(id);
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
