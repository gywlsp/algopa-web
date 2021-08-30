import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type PProps = {
  level?: number;
  color?: string;
  fontWeight?: number;
  width?: string;
  height?: string;
  textAlign?: string;
  ellipsis?: boolean;
  preWrap?: boolean;
  lineHeight?: number | string;
  numOfLines?: number;
  className?: string;
  textDecoration?:
    | 'none'
    | 'line-through'
    | ' overline'
    | 'underline'
    | ' initial'
    | ' inherit';
} & React.HTMLAttributes<HTMLParagraphElement>;

function P(props: PProps) {
  return <_P {...props} />;
}

const _P = styled.p<PProps>`
  ${({
    width,
    height,
    textAlign,
    ellipsis,
    preWrap,
    level,
    color,
    fontWeight,
    lineHeight,
    numOfLines,
    textDecoration,
  }: PProps) => {
    return `
      padding: 0;
      margin: 0;
      font-size: ${1 + level * 0.2}rem;
      color: ${color || GREY[800]};
      font-weight: ${fontWeight};
      width: ${width || 'fit-content'};
      height: ${height || 'fit-content'};
      text-align: ${textAlign || 'left'};
      text-decoration: ${textDecoration || 'none'};
      line-height: ${lineHeight || 'normal'};
      letter-spacing: -0.56px;
      word-break: break-all;
      ${
        ellipsis
          ? `white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        overflow: hidden;
        height:auto;
      `
          : ''
      }
      ${preWrap ? `white-space: pre-wrap; word-break: keep-all;` : ''}
      ${
        numOfLines > 1
          ? `
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${numOfLines};
        `
          : ''
      }
      `;
  }}
`;

export default React.memo(P);
