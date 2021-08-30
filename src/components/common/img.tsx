import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type ImgProps = {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  cover?: boolean;
  border?: boolean;
};

function Img(props: ImgProps) {
  return <_Img {...props} />;
}

export default React.memo(Img);

const _Img = styled.img<ImgProps>`
  ${({ width, height, circle, cover, border }) => `
    width: ${width || '100%'};
    height: ${height || '100%'};
    box-sizing: border-box;
    object-fit: ${cover ? 'cover' : 'fill'};
    border: ${border ? `0.1rem solid ${GREY[400]}` : ''};
    border-radius: ${circle ? '50%' : 0};
  `}
`;
