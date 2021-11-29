import React from 'react';
import styled from 'styled-components';

import RadioButton from './button';

import { RoadmapCategoryNode } from 'src/types/roadmap';

export type RoadmapCategoryRadioProps = {
  categoryNodes: RoadmapCategoryNode[];
  selectedId: string;
  selectNode: (nodeId: string) => void;
};

function RoadmapCategoryRadio({
  categoryNodes,
  selectedId,
  selectNode,
}: RoadmapCategoryRadioProps) {
  return (
    <Wrapper>
      {categoryNodes?.map((categoryNode) => (
        <RadioButton
          key={categoryNode.id}
          categoryNode={categoryNode}
          isSelected={selectedId === categoryNode.nodeId}
          selectNode={selectNode}
        />
      ))}
    </Wrapper>
  );
}

export default React.memo(RoadmapCategoryRadio);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
