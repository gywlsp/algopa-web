import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import GlobalStyle from '../styles/global';
import 'draft-js/dist/Draft.css';
import '../styles/problem-content.css';
import '../styles/note.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>algopa-web</title>
        {/* <link rel="icon" href="/favicon.png" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
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
