import React, { useState } from 'react';
import styled from 'styled-components';

import CheckIcon from 'src/assets/icons/check';
import { GREY } from 'src/constants/colors';

import CodeService from 'src/services/api/code';
import { useSelectedCodeEdit } from 'src/hooks/code';

export default function IndexTitleInput() {
  const { code, lastEventId } = useSelectedCodeEdit();
  const [indexTitle, setIndexTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndexTitle(e.target.value);
  };

  const handleSubmit = async () => {
    if (!lastEventId) {
      alert('코드 변경 내역이 없습니다.');
      return;
    }
    try {
      await CodeService.createEventIndex({
        codeId: code?.id,
        eventId: lastEventId,
        index: indexTitle,
      });
      alert('인덱스가 생성되었습니다.');
      setIndexTitle('');
    } catch (err) {
      alert('인덱스 생성에 실패하였습니다.');
    }
  };

  return (
    <>
      <InputWrapper>
        <StyledInput
          value={indexTitle}
          onChange={handleChange}
          placeholder="메세지(optional)를 입력해 현 시점의 코드를 인덱싱해보세요."
        />
      </InputWrapper>
      <Button onClick={handleSubmit}>
        <CheckIcon style={{ width: '1.6rem', height: '1.6rem' }} />
      </Button>
    </>
  );
}

const InputWrapper = styled.div`
  flex: 1;
  height: 2.4rem;
  padding: 0 0.6rem;
  background-color: ${GREY[750]};
  border: none;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: ${GREY[400]};
  background-color: ${GREY[750]};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
  :-ms-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
  :-mos-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${GREY[750]};
  color: ${GREY[400]};
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 0.6rem;
  padding: 0;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
`;
