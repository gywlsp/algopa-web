import axios from 'axios';
import { Company } from 'src/types/problem';

import { RoadmapDTO } from 'src/types/roadmap';
import { readConfig } from './config';

const read = async (company: Company): Promise<RoadmapDTO[]> =>
  axios(readConfig(company)).then((res) => {
    return res.data;
  });

const RoadmapService = {
  read,
};

export default RoadmapService;
