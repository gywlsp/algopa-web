import { useRef, useEffect, useState } from 'react';
import useRequest from '.';

import { readConfig } from 'src/services/api/roadmap/config';
import { RoadmapDTO } from 'src/types/roadmap';
import { Company } from 'src/types/problem';
import { getNodes } from 'src/lib/utils/roadmap';
import { VALIDATE_DISABLE_OPTIONS } from 'src/data/swr';

export const useRoadmap = (company: Company) => {
  return useRequest<RoadmapDTO>(readConfig(company), VALIDATE_DISABLE_OPTIONS);
};

export const useGraph = () => {
  const { data: roadmapData } = useRoadmap();
  const graph = useRef(null);
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

  useEffect(() => {
    const changeNetworkSize = () => {
      // Haven't resized in 100ms!
      graph?.current?.redraw();
    };
    let doIt;
    const onResize = () => {
      clearTimeout(doIt);
      doIt = setTimeout(changeNetworkSize, 100);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const initGraph = (network) => {
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

  const events = {
    selectNode: handleNodeClick,
    doubleClick: handleNodeDoubleClick,
  };

  const graphData = {
    nodes,
    edges,
  };

  const isFetched = !!roadmapData;

  return {
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
  };
};
