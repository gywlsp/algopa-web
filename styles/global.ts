// src/assets/styles/global-styles.ts
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

  p {
    line-height: 1.5;
  }

  .event-text-highlight {
    background: #444;
  }

  .event-text-line-highlight {
    background: #333;
  }

  @font-face {
    font-family: 'Comfortaa';
    font-weight: 500;
    src: url('/fonts/Comfortaa-Medium.ttf');
  }

  @media (max-width: 481px) {
    html {
      font-size: 8px;
    }
  }

  /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */

  @media (min-width: 481px) and (max-width: 767px) {
    html {
      font-size: 8.5px;
    }
  }

  /* 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    html {
      font-size: 9px;
    }
  }

  /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) {
    html {
      font-size: 9.5px;
    }
  }

  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */

  @media (min-width: 1025px) and (max-width: 1919px) {
    html {
      font-size: 10px;
    }
  }

  @media (min-width: 1920px) and (max-width: 2559px) {
    html {
      font-size: 10.5px;
    }
  }

  @media (min-width: 2560px) {
    html {
      font-size: 11px;
    }
  }

`;

export default GlobalStyle;
