import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

export type RoadmapGuideModalOpenButtonProps = {
  onClick: () => void;
};

export default function RoadmapGuideModalOpenButton({
  onClick,
}: RoadmapGuideModalOpenButtonProps) {
  return <Wrapper onClick={onClick}>?</Wrapper>;
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: 0.3rem 0 0 0.4rem;
  border: 1px solid ${GREY[500]};
  border-radius: 999px;
  font-size: 1.4rem;
  color: ${GREY[500]};
  background: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border: 1px solid ${GREY[600]};
    color: ${GREY[600]};
  }
`;
