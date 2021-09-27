import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

import { CodeTextChangeEventIndex } from 'src/types/code';
import CodeService from 'src/services/api/code';
import { selectedCodeEventId } from 'src/modules/atoms/code';

export type EventIndexPreviewCardProps = {
  order: number;
  codeId: string;
  eventId: string;
} & Partial<Pick<CodeTextChangeEventIndex, 'title'>>;

export default function EventIndexPreviewCard({
  order,
  codeId,
  eventId,
  title,
}: EventIndexPreviewCardProps) {
  const setSelectedCodeEventId = useSetRecoilState(selectedCodeEventId);

  const handleCardClick = () => {
    setSelectedCodeEventId(eventId);
  };

  const handleDeleteButtonClick = async () => {
    if (!confirm('인덱스를 삭제하시겠습니까?')) {
      return;
    }
    try {
      await CodeService.createEventIndex({
        codeId,
        eventId,
        index: null,
      });
      alert('인덱스가 삭제되었습니다');
    } catch (err) {
      alert('인덱스 생성에 실패하였습니다.');
    }
  };

  return (
    <Wrapper onClick={handleCardClick}>
      <DeleteButton onClick={handleDeleteButtonClick}>x</DeleteButton>
      <Order>{order}</Order>
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  position: relative;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  border: 1px solid ${GREY[700]};
  background: none;
  cursor: pointer;
`;

const Title = styled(P).attrs({ level: 1, color: GREY[400], numOfLines: 2 })`
  margin-right: auto;
`;

const Order = styled(P).attrs({ level: 1, color: GREY[400] })`
  margin-right: auto;
  margin-bottom: 0.4rem;
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
