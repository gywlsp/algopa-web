export interface IUser {
  id: number;
  email: string;
  provider: string;
  nickname: string;
  bojId?: string;
  accessToken: string;
  refreshToken: string;
}

export type IUserInputDTO = Pick<
  IUser,
  'email' | 'provider' | 'nickname' | 'bojId'
>;

export type IUserReadDTO = Pick<
  IUser,
  'email' | 'nickname' | 'bojId' | 'accessToken' | 'refreshToken'
>;
