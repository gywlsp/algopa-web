import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
const Graph: any = dynamic(() => import('react-graph-vis'), {
  ssr: false,
});

import RoadmapProblemModal from './problem-modal';
import { BLUE_GREEN, GREY, WHITE } from 'src/constants/colors';

import {
  GRAPH_OPTIONS,
  CATEGORY_NODES,
  EDGES,
  PROBLEM_NODES,
} from 'src/data/roadmap';
import { useRoadmap } from 'src/hooks/api/roadmap';

export default function Roadmap() {
  const { data: roadmapData } = useRoadmap();
  const [network, setNetwork] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const categoryNodes =
    roadmapData?.categories.map((category, index) => ({
      ...category,
      categoryId: category.id,
      id: category.nodeId,
      label: `[${index + 1}] ${category.name}`,
      color: BLUE_GREEN[300],
      shape: 'circle',
    })) || CATEGORY_NODES;
  const problemNodes =
    roadmapData?.problems.map((problem) => ({
      ...problem,
      problemId: problem.id,
      id: problem.nodeId,
      label:
        problem.title.length > 10
          ? problem.title.slice(0, 8) + '..'
          : problem.title,
      color: BLUE_GREEN[100],
      shape: 'circle',
    })) || PROBLEM_NODES;

  const nodes = categoryNodes.concat(problemNodes);
  const edges = roadmapData?.edges || EDGES;

  const selectedProblemNode = problemNodes.find(
    ({ id }) => id === selectedNodeId
  );

  const getNetwork = (_network) => {
    _network.moveTo({ scale: 0.7 });
    setNetwork(_network);
  };

  const handleNodeClick = ({
    pointer: {
      canvas: { x, y },
    },
    nodes,
  }) => {
    setSelectedNodeId(nodes[0]);
    network.moveTo({
      position: { x, y },
      scale: 1,
      offset: { x: 0, y: 0 },
      animation: { duration: 1000, easingFunction: 'easeInOutQuad' },
    });
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
      <Wrapper>
        <Graph
          graph={graphData}
          events={events}
          options={GRAPH_OPTIONS}
          getNetwork={getNetwork}
        />
      </Wrapper>
      <RoadmapProblemModal
        {...selectedProblemNode}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid ${GREY[400]};
  background-color: ${WHITE};
`;
