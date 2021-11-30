import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';
import P from './p';

import { Theme } from 'src/types';

export type SectionSize = 'large' | 'medium' | 'small';

export type SectionProps = {
  title: string;
  size?: SectionSize;
  children: ReactNode | ReactNodeArray;
  rightComponent?: ReactNode | ReactNodeArray;
  rightComponentAlign?: 'left' | 'right';
  className?: string;
  theme?: Theme;
};

const TitleLevel = {
  large: 7,
  medium: 5,
  small: 4,
};

export default function Section({
  title,
  size = 'large',
  children,
  rightComponent,
  rightComponentAlign = 'right',
  className,
  theme = 'light',
}: SectionProps) {
  return (
    <Wrapper className={className}>
      <TitleRow sectionSize={size} rightComponentAlign={rightComponentAlign}>
        <P
          level={TitleLevel[size]}
          fontWeight={500}
          color={GREY[theme === 'light' ? 800 : 400]}
        >
          {title}
        </P>
        {rightComponent}
      </TitleRow>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const TitleRow = styled.div<{
  sectionSize: SectionSize;
  rightComponentAlign: 'left' | 'right';
}>`
  width: 100%;
  display: flex;
  justify-content: ${({ rightComponentAlign }) =>
    rightComponentAlign === 'right' ? 'space-between' : 'flex-start'};
  align-items: center;
  margin-bottom: ${({ sectionSize }) =>
    sectionSize === 'large'
      ? '2rem'
      : sectionSize === 'medium'
      ? '1.2rem'
      : '0,8rem'};
`;
