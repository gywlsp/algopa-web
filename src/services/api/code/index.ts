import axios from 'axios';

import { listConfig } from './config';
import { ICode } from 'src/interfaces/code/ICode';

const list = async (problemId: number): Promise<ICode[]> =>
  axios(listConfig(problemId)).then((res) => {
    return res.data;
  });

const CodeService = { list };

export default CodeService;
