import React, { useState } from 'react';

import dynamic from 'next/dynamic';
import styled from 'styled-components';
const Graph: any = dynamic(() => import('react-graph-vis'), {
  ssr: false,
});

import RoadmapCategoryRadio from './radio';
import ProblemInfoModal from './problem-modal';
import { GREY, WHITE } from 'src/constants/colors';

import { GRAPH_OPTIONS } from 'src/data/roadmap';
import { getNodes } from 'src/lib/utils/roadmap';
import { useGraph, useRoadmap } from 'src/hooks/api/roadmap';

export default function Roadmap() {
  const { graph } = useGraph();
  const { data: roadmapData } = useRoadmap();
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const { nodes, categoryNodes, problemNodes } = getNodes(roadmapData);
  const edges = roadmapData?.edges;
  const selectedCategoryNodeId = categoryNodes?.find(
    ({ id }) => id === selectedNodeId
  )?.nodeId;
  const selectedProblemNode = problemNodes?.find(
    ({ id }) => id === selectedNodeId
  );

  const setInitialGraph = (network) => {
    network.moveTo({ scale: 0.7 });
    network.focus(nodes[0]?.id, {
      scale: 1,
      animation: { duration: 1000, easingFunction: 'easeInOutQuad' },
    });
    graph.current = network;
  };

  const selectNode = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    graph?.current?.selectNodes([nodeId]);
    graph?.current?.focus(nodeId, {
      scale: 1,
      animation: { duration: 1000, easingFunction: 'easeInOutQuad' },
    });
  };

  const handleNodeClick = ({ nodes }) => {
    selectNode(nodes[0]);
  };

  const handleNodeDoubleClick = ({ nodes }) => {
    if (!selectedProblemNode || !nodes?.length) {
      return;
    }
    if (selectedNodeId !== nodes[0]) {
      setSelectedNodeId(nodes[0]);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const graphData = {
    nodes,
    edges,
  };

  const events = {
    selectNode: handleNodeClick,
    doubleClick: handleNodeDoubleClick,
  };

  return (
    <>
      <RoadmapCategoryRadio
        categoryNodes={categoryNodes}
        selectedId={selectedCategoryNodeId}
        selectNode={selectNode}
      />
      {roadmapData && (
        <GraphWrapper>
          <Graph
            graph={graphData}
            events={events}
            options={GRAPH_OPTIONS}
            getNetwork={setInitialGraph}
          />
        </GraphWrapper>
      )}
      <ProblemInfoModal
        {...selectedProblemNode}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const GraphWrapper = styled.div`
  height: 100vh;
  border: 1px solid ${GREY[400]};
  background-color: ${WHITE};
`;
