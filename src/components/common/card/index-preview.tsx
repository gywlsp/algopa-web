import React, { useCallback } from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

import CodeService from 'src/services/api/code';
import { MouseEventHandler } from 'react';

export type EventIndexPreviewCardProps = {
  order: number;
  codeId: string;
  eventId: string;
  index?: string;
  onClick: () => void;
};

function EventIndexPreviewCard({
  order,
  codeId,
  eventId,
  index,
  onClick,
}: EventIndexPreviewCardProps) {
  const confirmIndexDelete = () => {
    return confirm('인덱스를 삭제하시겠습니까?');
  };

  const deleteIndex = async () => {
    try {
      await CodeService.createEventIndex({
        codeId,
        eventId,
        index: null,
      });
      alert('인덱스가 삭제되었습니다');
    } catch (err) {
      alert('인덱스 삭제에 실패하였습니다.');
    }
  };

  const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      async (e) => {
        e.stopPropagation();
        confirmIndexDelete() && deleteIndex();
      },
      [codeId, eventId, confirmIndexDelete, deleteIndex]
    );

  return (
    <Wrapper onClick={onClick}>
      <DeleteButton onClick={handleDeleteButtonClick}>x</DeleteButton>
      <Order>{order}</Order>
      <Title>{index}</Title>
    </Wrapper>
  );
}

export default React.memo(EventIndexPreviewCard);

const Wrapper = styled.button`
  position: relative;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  border: 1px solid ${GREY[750]};
  border-radius: 0.2rem;
  background-color: ${GREY[800]};
  &:hover {
    background-color: ${GREY[750]};
    transition: all 0.2s;
  }
  cursor: pointer;
`;

const Order = styled(P).attrs({ level: 1, color: GREY[450], fontWeight: 500 })`
  margin-right: auto;
  margin-bottom: 0.4rem;
`;

const Title = styled(P).attrs({
  level: 1,
  color: GREY[400],
  fontWeight: 500,
  numOfLines: 2,
})`
  margin-right: auto;
`;

const DeleteButton = styled.button`
  position: absolute;
  z-index: 999;
  top: -0.4rem;
  right: -0.4rem;
  width: 1.6rem;
  height: 1.6rem;
  font-size: 1.2rem;
  line-height: 1;
  background-color: ${GREY[400]};
  border: 1px solid ${GREY[400]};
  border-radius: 9999px;
  padding: 0 0 0.4rem;
  cursor: pointer;
`;
