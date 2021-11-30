import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="description"
            content="알고파 - 개인 맞춤 코딩테스트 학습 서비스"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="알고파 - 개인 맞춤 코딩테스트 학습 서비스"
          />
          <meta property="og:title" content="알고파" />
          <meta
            property="og:image"
            content="https://www.algopa.io/images/logo/thumbnail.jpg"
          />
          <meta property="og:site_name" content="알고파" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:image:width" content="1920" />
          <meta property="og:image:height" content="1080" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
