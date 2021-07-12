import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Graph from 'react-graph-vis';

import { GRAPH_DATA } from 'src/data/roadmap';
import { GREY } from 'src/constants/colors';

const EVENTS = {
  select: (e) => {
    const { nodes, edges } = e;
    alert(edges);
  },
};

//@TO_BE_IMPROVED
export default function Roadmap() {
  const [innerWidth, setInnerWidth] = useState(1920);
  const [innerHeight, setInnerHeight] = useState(1080);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  });

  const GRAPH_OPTIONS = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: '#000',
    },
    height: innerHeight,
  };

  return (
    <Wrapper>
      <Graph graph={GRAPH_DATA} options={GRAPH_OPTIONS} events={EVENTS} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${GREY[700]};
`;
