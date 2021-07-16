import React from 'react';
import styled from 'styled-components';

import TextInput from 'src/components/common/input';
import Section from 'src/components/common/section';
import P from 'src/components/common/p';
import Img from 'src/components/common/img';
import { BLUE_GREEN, GREY } from 'src/constants/colors';

export type BojSubmitLinkInput = {
  bojIdAuthToken: string;
  bojSubmitLink: string;
  setBojSubmitLink: React.Dispatch<React.SetStateAction<string>>;
};

export default function BojSubmitLinkInput({
  bojIdAuthToken,
  bojSubmitLink,
  setBojSubmitLink,
}: BojSubmitLinkInput) {
  const handleChange = (e) => {
    setBojSubmitLink(e.target.value);
  };

  return (
    <Wrapper title="계정 본인 확인">
      <GuideText>
        백준{' '}
        <a href="https://www.acmicpc.net/problem/2557" target="_blank">
          2557
        </a>
        번 문제에 문자열{' '}
        <AuthenticationString>{bojIdAuthToken}</AuthenticationString>를{' '}
        <Strong>공개 상태</Strong>로 제출한 후, <br />
        <Strong>제출한 소스코드의 주소</Strong>를 입력하세요.
      </GuideText>
      <GuideImgWrapper>
        <GuideImg
          src="/img/boj-id-authentication-1.jpg"
          alt="certify-boj-guide1"
        />
        <GuideImg
          src="/img/boj-id-authentication-2.jpg"
          alt="certify-boj-guide2"
        />
      </GuideImgWrapper>
      <Row>
        <Label>소스코드 주소</Label>
        <TextInput value={bojSubmitLink} onChange={handleChange} />
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled(Section).attrs({ size: 'small' })`
  margin: 0.8rem 0;
`;

const GuideText = styled(P).attrs({ level: 2 })`
  margin-bottom: 1.2rem;
`;

const GuideImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`;

const Strong = styled.strong`
  font-weight: 500;
  color: ${BLUE_GREEN[500]};
`;

const AuthenticationString = styled.strong`
  font-weight: 500;
  font-size: 2.4rem;
  color: ${GREY[900]};
  margin-bottom: 2rem;
`;

const Label = styled(P).attrs({ level: 3, fontWeight: 500 })`
  margin-right: 1.2rem;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const GuideImg = styled(Img).attrs({
  width: '49%',
  height: '24rem',
  border: true,
  cover: true,
})``;
