import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';
import P from './p';

export type SectionSize = 'large' | 'medium' | 'small';

export type SectionProps = {
  title: string;
  size?: SectionSize;
  children: ReactNode | ReactNodeArray;
  className?: string;
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
  className,
}: SectionProps) {
  return (
    <Wrapper className={className}>
      <Title
        sectionSize={size}
        level={TitleLevel[size]}
        fontWeight={500}
        color={GREY[800]}
      >
        {title}
      </Title>
      {children}
    </Wrapper>
  );
}

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
