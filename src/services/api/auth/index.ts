import axios from 'axios';

import {
  loginConfig,
  authenticateBojIdConfig,
  validateNicknameConfig,
  getBojAuthTokenConfig,
  joinConfig,
} from './config';
import { Provider } from 'src/types/user';
import { IUserInputDTO, IUserReadDTO } from 'src/interfaces/user/IUser';

const login = async (
  provider: Provider,
  token: string
): Promise<IUserReadDTO> =>
  axios(loginConfig(provider, token)).then((res) => {
    return res.data;
  });

const validateNickname = async (
  nickname: string
): Promise<{ isValidated: boolean }> =>
  axios(validateNicknameConfig(nickname)).then((res) => {
    return res.data;
  });

const getBojIdAuthToken = async (
  bojId: string
): Promise<{ authenticationToken: string }> =>
  axios(getBojAuthTokenConfig(bojId)).then((res) => {
    return res.data;
  });

const authenticateBojId = async (
  bojId: string
): Promise<{ authenticationToken: string }> =>
  axios(authenticateBojIdConfig(bojId)).then((res) => {
    return res.data;
  });

const join = async (
  data: IUserInputDTO,
  token: string
): Promise<IUserInputDTO> =>
  axios(joinConfig(data, token)).then((res) => {
    return res.data;
  });

const AuthService = {
  login,
  validateNickname,
  getBojIdAuthToken,
  authenticateBojId,
  join,
};

export default AuthService;
