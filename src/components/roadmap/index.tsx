import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
const Graph: any = dynamic(() => import('react-graph-vis'), {
  ssr: false,
});

import RoadmapProblemModal from './problem-modal';
import { BLUE_GREEN, WHITE } from 'src/constants/colors';

import { GRAPH_DATA, PROBLEM_NODES } from 'src/data/roadmap';

//@TO_BE_IMPROVED
export default function Roadmap() {
  const [network, setNetwork] = useState(null);
  const [selectedNodeID, setSelectedNodeID] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const selectedProblemNode = PROBLEM_NODES.find(
    ({ id }) => id === selectedNodeID
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
    setSelectedNodeID(nodes[0]);
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
    if (selectedNodeID !== nodes[0]) {
      setSelectedNodeID(nodes[0]);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const graphOptions = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: '#000',
    },
  };

  const events = {
    selectNode: handleNodeClick,
    doubleClick: handleNodeDoubleClick,
  };

  return (
    <>
      <Wrapper>
        <Graph
          graph={GRAPH_DATA}
          options={graphOptions}
          events={events}
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
  border: 1px solid ${BLUE_GREEN[500]};
  background-color: ${WHITE};
`;
