import { useRef, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import useRequest from '.';

import { readConfig } from 'src/services/api/roadmap/config';
import { RoadmapDTO } from 'src/types/roadmap';
import { getNodes } from 'src/lib/utils/roadmap';
import { selectedCompany } from 'src/modules/atoms/problem';
import { VALIDATE_DISABLE_OPTIONS } from 'src/data/swr';

const useRoadmapGraph = () => {
  const company = useRecoilValue(selectedCompany);
  const graph = useRef(null);
  const { data } = useRequest<RoadmapDTO>(
    readConfig(company),
    VALIDATE_DISABLE_OPTIONS
  );
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [isProblemInfoModalOpen, setProblemInfoModalOpen] = useState(false);

  const { nodes, categoryNodes, problemNodes } = getNodes(data);
  const edges = data?.edges;
  const selectedCategoryNodeId = categoryNodes?.find(
    ({ id }) => id === selectedNodeId
  )?.nodeId;
  const selectedProblemNode = problemNodes?.find(
    ({ id }) => id === selectedNodeId
  );

  useEffect(() => {
    if (graph?.current) {
      focusFirstNode(graph?.current);
    }
    const changeGraphSize = () => {
      // Haven't resized in 100ms!
      graph?.current?.redraw();
    };
    let doIt;
    const onResize = () => {
      clearTimeout(doIt);
      doIt = setTimeout(changeGraphSize, 100);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [company]);

  const focusFirstNode = (network = graph?.current) => {
    network?.moveTo({ scale: 0.7 });
    network?.focus(nodes[0]?.id, {
      scale: 1,
      animation: { duration: 1000, easingFunction: 'easeInOutQuad' },
    });
  };

  const initGraph = (network) => {
    console.log('ho');
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
    setProblemInfoModalOpen(true);
  };

  const closeProblemInfoModal = () => {
    setProblemInfoModalOpen(false);
  };

  const graphData = {
    nodes,
    edges,
  };

  const events = {
    selectNode: handleNodeClick,
    doubleClick: handleNodeDoubleClick,
  };

  return {
    isDataFetched: !!data,
    graphData,
    initGraph,
    categoryNodes,
    events,
    selectedCategoryNodeId,
    selectedProblemNode,
    selectNode,
    isProblemInfoModalOpen,
    closeProblemInfoModal,
  };
};

export const useRoadmap = () => {
  const graph = useRoadmapGraph();
  const [isGuideModalOpen, setGuideModalOpen] = useState(false);

  const openGuideModal = () => {
    setGuideModalOpen(true);
  };

  const closeGuideModal = () => {
    setGuideModalOpen(false);
  };

  return {
    ...graph,
    isGuideModalOpen,
    openGuideModal,
    closeGuideModal,
  };
};
