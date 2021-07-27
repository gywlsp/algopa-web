export type Provider = 'github' | 'google';

export type UserToken = {
  accessToken: string;
  refreshToken: string;
};

export type UserCategoryInfo = {
  failureRate?: number;
  progressRate?: number;
};

export type UserProblemInfo = {
  isSolved?: boolean;
};
