import { useRef, useEffect, useState } from 'react';
import useRequest from '.';
import { useRecoilValue } from 'recoil';

import { readConfig } from 'src/services/api/roadmap/config';
import { RoadmapDTO } from 'src/types/roadmap';
import { getNodes } from 'src/lib/utils/roadmap';
import { selectedCompany } from 'src/modules/atoms/problem';
import { VALIDATE_DISABLE_OPTIONS } from 'src/data/swr';

export const useRoadmap = () => {
  const company = useRecoilValue(selectedCompany);
  const { data: roadmapData } = useRequest<RoadmapDTO>(
    readConfig(company),
    VALIDATE_DISABLE_OPTIONS
  );
  const graph = useRef(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [isGuideModalOpen, setGuideModalOpen] = useState(false);
  const [isProblemModalOpen, setProblemModalOpen] = useState(false);
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

  useEffect(() => {
    focusFirstNode(graph?.current);
  }, [company]);

  const focusFirstNode = (network = graph?.current) => {
    network?.moveTo({ scale: 0.7 });
    network?.focus(nodes[0]?.id, {
      scale: 1,
      animation: { duration: 1000, easingFunction: 'easeInOutQuad' },
    });
  };

  const initGraph = (network) => {
    focusFirstNode(network);
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
    setProblemModalOpen(true);
  };

  const closeProblemModal = () => {
    setProblemModalOpen(false);
  };

  const openGuideModal = () => {
    setGuideModalOpen(true);
  };

  const closeGuideModal = () => {
    setGuideModalOpen(false);
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
    isProblemModalOpen,
    closeProblemModal,
    isGuideModalOpen,
    openGuideModal,
    closeGuideModal,
  };
};
