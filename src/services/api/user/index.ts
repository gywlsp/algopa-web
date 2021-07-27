import axios from 'axios';

import { IUserReadDTO } from 'src/interfaces/user/IUser';
import { meReadConfig } from './config';

const meRead = async (): Promise<IUserReadDTO[]> =>
  axios(meReadConfig()).then((res) => {
    return res.data;
  });

const UserService = {
  meRead,
};

export default UserService;
