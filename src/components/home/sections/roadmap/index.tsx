import React from 'react';

import RoadmapGraph from 'src/components/home/sections/roadmap/graph';
import CategoryRadio from './category-radio';
import ProblemInfoModal from './problem-modal';
import Section from 'src/components/common/section';

import { useGraph } from 'src/hooks/api/roadmap';

export default function RoadmapSection() {
  const {
    initGraph,
    isFetched,
    graphData,
    categoryNodes,
    events,
    selectedCategoryNodeId,
    selectedProblemNode,
    selectNode,
    isModalOpen,
    closeModal,
  } = useGraph();

  return (
    <Section title="취업으로 가는 코딩 테스트 준비 로드맵 ✨">
      <CategoryRadio
        categoryNodes={categoryNodes}
        selectedId={selectedCategoryNodeId}
        selectNode={selectNode}
      />
      <RoadmapGraph
        isFetched={isFetched}
        graphData={graphData}
        initGraph={initGraph}
        events={events}
      />
      <ProblemInfoModal
        {...selectedProblemNode}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </Section>
  );
}
