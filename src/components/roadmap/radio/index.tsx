import HorizontalScrollable from 'src/components/common/horizontal-scrollable';
import RadioButton from './button';

import { RoadmapCategoryNode } from 'src/types/roadmap';

export type RoadmapCategoryRadioProps = {
  categoryNodes: RoadmapCategoryNode[];
  selectedId: string;
  selectNode: (nodeId: string) => void;
};

export default function RoadmapCategoryRadio({
  categoryNodes,
  selectedId,
  selectNode,
}: RoadmapCategoryRadioProps) {
  return (
    <HorizontalScrollable>
      {categoryNodes?.map((categoryNode) => (
        <RadioButton
          key={categoryNode.id}
          categoryNode={categoryNode}
          isSelected={selectedId === categoryNode.nodeId}
          selectNode={selectNode}
        />
      ))}
    </HorizontalScrollable>
  );
}
