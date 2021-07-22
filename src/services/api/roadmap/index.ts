import axios from 'axios';

import { RoadmapDTO } from 'src/types/roadmap';
import { readConfig } from './config';

const read = async (): Promise<RoadmapDTO[]> =>
  axios(readConfig()).then((res) => {
    return res.data;
  });

const RoadmapService = {
  read,
};

export default RoadmapService;
