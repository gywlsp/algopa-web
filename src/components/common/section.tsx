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
  className?: string;
  theme?: Theme;
};

const TitleLevel = {
  large: 7,
  medium: 5,
  small: 4,
};

function Section({
  title,
  size = 'large',
  children,
  className,
  theme = 'light',
}: SectionProps) {
  return (
    <Wrapper className={className}>
      <Title
        sectionSize={size}
        level={TitleLevel[size]}
        fontWeight={500}
        color={GREY[theme === 'light' ? 800 : 400]}
      >
        {title}
      </Title>
      {children}
    </Wrapper>
  );
}

export default React.memo(Section);

const Wrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Title = styled(P)<{ sectionSize: SectionSize }>`
  margin-bottom: ${({ sectionSize }) =>
    sectionSize === 'large'
      ? '2rem'
      : sectionSize === 'medium'
      ? '1.2rem'
      : '0,8rem'};
`;
