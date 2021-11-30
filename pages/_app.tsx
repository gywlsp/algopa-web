import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';

import GlobalStyle from '../styles/global';
import 'draft-js/dist/Draft.css';
import 'prismjs/themes/prism.css';
import '../styles/problem-content.css';
import '../styles/note.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>알고파 - 개인 맞춤 코딩테스트 학습 서비스</title>
        <link rel="icon" href="/images/logo/app.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:url"
          content={`https://www.algopa.io/${router.pathname}`}
        />
      </Head>
      <GlobalStyle />
      <RecoilRoot>
        <Main>
          <Component {...pageProps} />
        </Main>
      </RecoilRoot>
    </>
  );
}

export default MyApp;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;
