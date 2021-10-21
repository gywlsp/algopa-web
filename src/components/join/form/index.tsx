import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';

import NicknameInput from './inputs/nickname';
import Button from 'src/components/common/button';

import { getDecryptedString } from 'src/lib/utils/crypto';
import AuthService from 'src/services/api/auth';

export default function JoinForm() {
  const router = useRouter();
  const { email, pv: provider, at } = router.query;
  const accessToken = getDecryptedString(at as string);

  const [nickname, setNickname] = useState('');
  const [isNicknameDuplicated, setNicknameDuplicated] = useState<boolean>();

  const isSubmitButtonEnabled = nickname && !isNicknameDuplicated;

  const getFormValid = async () => {
    if (!nickname) {
      alert('닉네임을 입력해주세요.');
      return false;
    }
    try {
      await AuthService.validateNickname(nickname);
    } catch (err) {
      if (err.response.data?.code === 'ALREADY_NICKNAME_EXISTS') {
        setNicknameDuplicated(true);
        alert('닉네임이 이미 존재합니다.');
        return false;
      }
    }
    if (!email || !provider || !accessToken) {
      alert('회원가입에 실패했습니다. 관리자에게 문의 바랍니다.');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const isFormValid = await getFormValid();
    if (!isFormValid) {
      return;
    }
    try {
      await AuthService.join(
        {
          email: email as string,
          provider: provider as string,
          nickname,
        },
        accessToken as string
      );
      alert('회원가입이 완료되었습니다!');
      router.push('/');
    } catch (err) {
      alert('회원가입에 실패했습니다!');
    }
  };

  return (
    <Wrapper>
      <NicknameInput
        nickname={nickname}
        setNickname={setNickname}
        isNicknameDuplicated={isNicknameDuplicated}
        setNicknameDuplicated={setNicknameDuplicated}
      />
      <SubmitButton
        title="회원가입 완료"
        onClick={handleSubmit}
        disabled={!isSubmitButtonEnabled}
        block
        size="large"
        type="primary"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 46rem;
`;

const SubmitButton = styled(Button)`
  margin-top: 1.2rem;
`;
