import React from 'react';
import styled from 'styled-components';

import TextInput from 'src/components/common/input';
import Button from 'src/components/common/button';
import Section from 'src/components/common/section';

export type BojInputProps = {
  bojId: string;
  setBojId: React.Dispatch<React.SetStateAction<string>>;
  //setBojIdAuthToken: React.Dispatch<React.SetStateAction<string>>;
};

export default function BojIdInput({
  bojId,
  setBojId,
}: //setBojIdAuthToken,
BojInputProps) {
  const handleChange = (e) => {
    setBojId(e.target.value);
  };

  // const validateBojId = async () => {
  //   if (!bojId) {
  //     alert('백준 아이디를 입력해주세요.');
  //     return;
  //   }
  //   // try {
  //   //   const { authenticationToken } = await AuthService.getBojIdAuthToken(
  //   //     bojId
  //   //   );
  //   //   setBojIdAuthToken(authenticationToken);
  //   // } catch (err) {
  //   //   console.log(err);
  //   // }
  // };

  return (
    <Wrapper size="medium" title="백준 아이디">
      <TextInput
        value={bojId}
        onChange={handleChange}
        // RightComponent={
        //   <SubmitButton
        //     type="primary"
        //     title="인증하기"
        //     onClick={validateBojId}
        //   />
        // }
      />
    </Wrapper>
  );
}

const Wrapper = styled(Section)`
  margin: 2rem 0 1.2rem;
`;

const SubmitButton = styled(Button)`
  margin-left: 0.4rem;
`;
