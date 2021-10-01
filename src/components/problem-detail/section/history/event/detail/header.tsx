import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

import { selectedCodeEvent } from 'src/modules/selectors/code';

export type EventDetailSectionHeaderProps = {
  isEditing: boolean;
  onStart: () => void;
  onCancel: () => void;
  onSubmit: () => Promise<void>;
};

export default function EventDetailSectionHeader({
  isEditing,
  onStart,
  onCancel,
  onSubmit,
}: EventDetailSectionHeaderProps) {
  const codeEvent = useRecoilValue(selectedCodeEvent);
  const hasIndex = codeEvent?.index !== undefined;

  return (
    <Wrapper>
      <Title>이벤트 상세</Title>
      {!isEditing && (
        <Button onClick={onStart}>인덱스 {hasIndex ? '수정' : '추가'}</Button>
      )}
      {isEditing && (
        <>
          <Button onClick={onSubmit}>저장</Button>
          <Button onClick={onCancel}>취소</Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  padding: 1.2rem;
  border-bottom: 0.1rem solid ${GREY[900]};
`;

const Title = styled(P).attrs({ level: 2, color: GREY[400] })`
  margin-right: auto;
`;

const Button = styled.button`
  font-size: 1.2rem;
  color: ${GREY[400]};
  padding: 0.6rem 0.8rem;
  margin-left: 0.8rem;
  border: 1px solid ${GREY[700]};
  background-color: ${GREY[800]};
  &:hover {
    background-color: ${GREY[700]};
    transition: all 0.2s;
  }
  border-radius: 0.2rem;
  cursor: pointer;
`;
