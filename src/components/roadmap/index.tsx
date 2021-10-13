import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
const Graph: any = dynamic(() => import('react-graph-vis'), {
  ssr: false,
});

import RoadmapCategoryRadio from './radio';
import ProblemInfoModal from './problem-modal';
import { GREY, WHITE } from 'src/constants/colors';

import { GRAPH_OPTIONS } from 'src/data/roadmap';
import { useGraph } from 'src/hooks/api/roadmap';

export default function Roadmap() {
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
    <>
      <RoadmapCategoryRadio
        categoryNodes={categoryNodes}
        selectedId={selectedCategoryNodeId}
        selectNode={selectNode}
      />
      <GraphWrapper>
        {isFetched && (
          <Graph
            graph={graphData}
            events={events}
            options={GRAPH_OPTIONS}
            getNetwork={initGraph}
          />
        )}
      </GraphWrapper>
      <ProblemInfoModal
        {...selectedProblemNode}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

const GraphWrapper = styled.div`
  height: 100vh;
  border: 1px solid ${GREY[400]};
  background-color: ${WHITE};
`;
