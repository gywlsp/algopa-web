import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import P from 'src/components/common/p';
import ChevronLeftIcon from 'src/assets/icons/chevron/left';
import { GREY, WHITE } from 'src/constants/colors';

import { CodeSectionType } from 'src/modules/atoms/problem';
import { selectedProblemCodeId } from 'src/modules/atoms/code';
import CodeService from 'src/services/api/code';
import { useCodeNoteContext } from 'src/modules/context/code-note';

export default function CodeNoteSectionHeader() {
  const selectedCodeId = useRecoilValue(selectedProblemCodeId);
  const setCodeSectionType = useSetRecoilState(CodeSectionType);
  const {
    state: { note, isEditing },
    action: {
      onEditStart,
      onEditCancel,
      onEditSave,
      onEditSubmit,
      onNoteDelete,
    },
  } = useCodeNoteContext();

  const handleBackButtonClick = async () => {
    try {
      const events = await CodeService.eventList(selectedCodeId);
      setCodeSectionType(events?.length ? 'history' : 'code');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <BackButton onClick={handleBackButtonClick}>
        <ChevronLeftIcon
          style={{ width: '1.2rem', height: '1.2rem' }}
          fill={WHITE}
        />
      </BackButton>
      <Title>풀이 노트</Title>
      {isEditing && (
        <>
          <Button onClick={onEditCancel}>취소</Button>
          <Button onClick={onEditSave}>임시저장</Button>
          <Button onClick={onEditSubmit}>저장</Button>
        </>
      )}
      {!isEditing && (
        <>
          <Button onClick={onEditStart}>
            {note?.submitted ? '수정' : '추가'}
          </Button>
          {note?.submitted && <Button onClick={onNoteDelete}>삭제</Button>}
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

const BackButton = styled.button`
  height: 1.2rem;
  padding: 0;
  border: none;
  background: none;
  margin-right: 0.4rem;
`;

const Title = styled(P).attrs({ level: 2, color: GREY[400], fontWeight: 500 })`
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
