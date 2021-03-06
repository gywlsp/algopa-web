import React from 'react';
import styled from 'styled-components';
import { Color } from 'vis-network';

import { RoadmapCategoryNode } from 'src/types/roadmap';
import { BLUE_GREEN } from 'src/constants/colors';

export type RoadmapCategoryRadioButtonProps = {
  categoryNode: RoadmapCategoryNode;
  isSelected: boolean;
  selectNode: (nodeId: string) => void;
};

function RoadmapCategoryRadioButton({
  categoryNode,
  isSelected,
  selectNode,
}: RoadmapCategoryRadioButtonProps) {
  const { order, name, nodeId, color, problemCount, solvedCount } =
    categoryNode;

  const { background, border, highlight } = color as Color;
  const { background: highlightBackground, border: highlightBorder } =
    highlight as Color;

  const handleButtonClick = () => {
    selectNode(nodeId);
  };

  const wrapperStyle = isSelected
    ? {
        fontWeight: 600,
        backgroundColor: background,
        border: `1px solid ${border}`,
      }
    : {
        fontWeight: 400,
        backgroundColor: highlightBackground,
        border: `1px solid ${highlightBorder}`,
      };

  const progressInfo =
    solvedCount === undefined
      ? `(${problemCount})`
      : `(${solvedCount}/${problemCount})`;

  const buttonText = `${order}. ${name}${progressInfo}`;

  return (
    <Wrapper style={wrapperStyle} onClick={handleButtonClick}>
      {buttonText}
    </Wrapper>
  );
}

export default React.memo(RoadmapCategoryRadioButton);

const Wrapper = styled.button`
  color: ${BLUE_GREEN[900]};
  font-size: 1.4rem;
  padding: 0.6rem 0.8rem;
  margin-right: 0.4rem;
  border-radius: 0.4rem;
  margin-bottom: 0.4rem;
  cursor: pointer;
`;
