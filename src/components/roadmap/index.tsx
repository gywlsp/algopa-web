import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
const Graph: any = dynamic(() => import('react-graph-vis'), {
  ssr: false,
});

import RoadmapProblemModal from './problem-modal';
import { GREY, WHITE } from 'src/constants/colors';

import {
  GRAPH_OPTIONS,
  getProblemNodeStyle,
  getCategoryNodeStyle,
} from 'src/data/roadmap';
import { useRoadmap } from 'src/hooks/api/roadmap';
import {
  RoadmapCategoryNode,
  RoadmapNodes,
  RoadmapProblemNode,
} from 'src/types/roadmap';
import { useMe } from 'src/hooks/api/user';

export default function Roadmap() {
  const { data: userData } = useMe();
  const { data: roadmapData } = useRoadmap();
  const network = useRef(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const isLoggedIn = !!userData;

  const categoryNodes: RoadmapCategoryNode[] = roadmapData?.categories.map(
    (category, index) => ({
      ...category,
      categoryId: category.id,
      id: category.nodeId,
      label: `[${index + 1}] ${category.name}`,
      ...getCategoryNodeStyle(isLoggedIn, index),
      userData,
    })
  );

  const problemNodes: RoadmapProblemNode[] = roadmapData?.problems.map(
    (problem, index) => ({
      ...problem,
      problemId: problem.id,
      id: problem.nodeId,
      label:
        problem.title.length > 8
          ? problem.title.slice(0, 6) + '..'
          : problem.title,
      ...getProblemNodeStyle(isLoggedIn, index),
    })
  );

  const nodes: RoadmapNodes = [
    ...(categoryNodes || []),
    ...(problemNodes || []),
  ];
  const edges = roadmapData?.edges;

  const selectedProblemNode = problemNodes?.find(
    ({ id }) => id === selectedNodeId
  );

  const getNetwork = (_network) => {
    _network.moveTo({ scale: 0.7 });
    _network.focus(nodes[0].id, {
      scale: 1,
      animation: { duration: 1000, easingFunction: 'easeInOutQuad' },
    });
    network.current = _network;
  };

  const handleNodeClick = ({
    pointer: {
      canvas: { x, y },
    },
    nodes,
  }) => {
    setSelectedNodeId(nodes[0]);
    network.current.moveTo({
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
