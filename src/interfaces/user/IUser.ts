import { AuthTokens } from 'src/types/user';

export interface IUser {
  id?: number;
  email: string;
  provider?: string;
  nickname: string;
  bojId?: string;
}

export type IUserInputDTO = Pick<
  IUser,
  'email' | 'provider' | 'nickname' | 'bojId'
>;

export type IUserReadDTO = Pick<IUser, 'email' | 'nickname' | 'bojId'> &
  Partial<AuthTokens>;
