import React from 'react';
import styled from 'styled-components';

import TextInput from 'src/components/common/input';
import Button from 'src/components/common/button';
import Section from 'src/components/common/section';

import { validateNicknameFormat } from 'src/lib/utils';
import AuthService from 'src/services/api/auth';

export type NicknameInputProps = {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  isNicknameDuplicated: boolean;
  setNicknameDuplicated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NicknameInput({
  nickname,
  setNickname,
  isNicknameDuplicated,
  setNicknameDuplicated,
}: NicknameInputProps) {
  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 10 || !validateNicknameFormat(value)) {
      return;
    }
    if (isNicknameDuplicated !== undefined) {
      setNicknameDuplicated(undefined);
    }
    setNickname(value);
  };

  const checkNicknameDuplicated = async () => {
    if (!nickname) {
      alert('닉네임을 입력하세요.');
      return;
    }
    try {
      await AuthService.validateNickname(nickname);
      setNicknameDuplicated(false);
    } catch (err) {
      if (err.response.data?.errCode === 'ALREADY_EXISTS_NAME') {
        setNicknameDuplicated(true);
      }
    }
  };

  return (
    <Section size="medium" title="닉네임">
      <TextInput
        name="nickname"
        value={nickname}
        onChange={handleChange}
        placeholder="10자 이내, 한글/영어/숫자"
        maxLength={10}
        error={{
          state: isNicknameDuplicated === true,
          text: '이미 존재하는 닉네임입니다.',
        }}
        success={{
          state: isNicknameDuplicated === false,
          text: '사용 가능한 닉네임입니다.',
        }}
        RightComponent={
          <DuplicateCheckButton
            type="primary"
            title="중복확인"
            onClick={checkNicknameDuplicated}
          />
        }
      />
    </Section>
  );
}

const DuplicateCheckButton = styled(Button)`
  margin-left: 0.4rem;
`;
