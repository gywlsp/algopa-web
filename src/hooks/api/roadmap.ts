import useRequest from '.';

import { readConfig } from 'src/services/api/roadmap/config';
import { RoadmapDTO } from 'src/types/roadmap';

export const useRoadmap = () => useRequest<RoadmapDTO>(readConfig());
