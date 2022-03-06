import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
const Graph: any = dynamic(() => import('react-graph-vis'), {
  ssr: false,
});
import { Network, Node } from 'vis-network';

import { GREY, WHITE } from 'src/constants/colors';

import { GRAPH_OPTIONS } from 'src/data/roadmap';
import {
  RoadmapCategoryNode,
  RoadmapProblemNode,
  RoadmapEdgeDTO,
} from 'src/types/roadmap';

export type RoadmapGraphProps = {
  isFetched: boolean;
  graphData: {
    nodes: (RoadmapCategoryNode | RoadmapProblemNode)[];
    edges: RoadmapEdgeDTO[];
  };
  initGraph: (network: Network) => void;
  events: {
    selectNode: ({ nodes }: { nodes: Node[] }) => void;
    doubleClick: ({ nodes }: { nodes: Node[] }) => void;
  };
};

export default function Roadmap({
  initGraph,
  isFetched,
  graphData,
  events,
}: RoadmapGraphProps) {
  return (
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
  );
}

const GraphWrapper = styled.div`
  height: calc(100vh - 10rem);
  border: 1px solid ${GREY[400]};
  background-color: ${WHITE};
`;
