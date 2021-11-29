import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
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

  const { nodes, categoryNodes, problemNodes } = useMemo(
    () => getNodes(data),
    [data]
  );
  const edges = useMemo(() => data?.edges, [data]);
  const selectedCategoryNodeId = useMemo(
    () => categoryNodes?.find(({ id }) => id === selectedNodeId)?.nodeId,
    [categoryNodes, selectedNodeId]
  );
  const selectedProblemNode = useMemo(
    () => problemNodes?.find(({ id }) => id === selectedNodeId),
    [problemNodes, selectedNodeId]
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

  const focusFirstNode = useCallback(
    (network = graph?.current) => {
      network?.moveTo({ scale: 0.7 });
      network?.focus(nodes[0]?.id, {
        scale: 1,
        animation: { duration: 1000, easingFunction: 'easeInOutQuad' },
      });
    },
    [nodes[0]?.id, graph?.current]
  );

  const initGraph = useCallback(
    (network) => {
      focusFirstNode(network);
      graph.current = network;
    },
    [graph, focusFirstNode]
  );

  const selectNode = useCallback(
    (nodeId: string) => {
      setSelectedNodeId(nodeId);
      graph?.current?.selectNodes([nodeId]);
      graph?.current?.focus(nodeId, {
        scale: 1,
        animation: { duration: 1000, easingFunction: 'easeInOutQuad' },
      });
    },
    [graph?.current]
  );

  const handleNodeClick = useCallback(({ nodes }) => {
    selectNode(nodes[0]);
  }, []);

  const handleNodeDoubleClick = useCallback(
    ({ nodes }) => {
      if (!selectedProblemNode || !nodes?.length) {
        return;
      }
      if (selectedNodeId !== nodes[0]) {
        setSelectedNodeId(nodes[0]);
      }
      setProblemInfoModalOpen(true);
    },
    [selectedProblemNode, selectedNodeId]
  );

  const closeProblemInfoModal = useCallback(() => {
    setProblemInfoModalOpen(false);
  }, []);

  const graphData = useMemo(
    () => ({
      nodes,
      edges,
    }),
    [nodes, edges]
  );

  const events = useMemo(
    () => ({
      selectNode: handleNodeClick,
      doubleClick: handleNodeDoubleClick,
    }),
    [handleNodeClick, handleNodeDoubleClick]
  );

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

  const openGuideModal = useCallback(() => {
    setGuideModalOpen(true);
  }, []);

  const closeGuideModal = useCallback(() => {
    setGuideModalOpen(false);
  }, []);

  return {
    ...graph,
    isGuideModalOpen,
    openGuideModal,
    closeGuideModal,
  };
};
