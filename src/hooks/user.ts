import useRequest from '.';

import { meReadConfig } from 'src/services/api/user/config';
import { IUserReadDTO } from 'src/interfaces/user/IUser';

export const useMe = () => useRequest<IUserReadDTO>(meReadConfig());
