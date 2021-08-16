import { useRef, useEffect } from 'react';
import useRequest from '.';

import { readConfig } from 'src/services/api/roadmap/config';
import { RoadmapDTO } from 'src/types/roadmap';

export const useRoadmap = () => useRequest<RoadmapDTO>(readConfig());

export const useGraph = () => {
  const graph = useRef(null);
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

  return { graph };
};
