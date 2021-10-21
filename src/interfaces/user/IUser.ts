import { AuthTokens } from 'src/types/user';

export interface IUser {
  id?: number;
  email: string;
  provider?: string;
  nickname: string;
}

export type IUserInputDTO = Pick<IUser, 'email' | 'provider' | 'nickname'>;

export type IUserReadDTO = Pick<IUser, 'email' | 'nickname'> &
  Partial<AuthTokens>;
