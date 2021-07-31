import useRequest from '.';
import { useEffect, useState } from 'react';

import { getCookie, setCookie } from 'src/lib/utils/cookie';
import { meReadConfig } from 'src/services/api/user/config';
import AuthService from 'src/services/api/auth';
import { IUserReadDTO } from 'src/interfaces/user/IUser';
import { UserToken } from 'src/types/user';

export const useMe = () => {
  const [userToken, setUserToken] = useState<UserToken>({
    accessToken: getCookie('ACCESS_TOKEN'),
    refreshToken: getCookie('REFRESH_TOKEN'),
  });
  const { accessToken, refreshToken } = userToken;

  const { data, error, mutate } = useRequest<IUserReadDTO>(
    meReadConfig(accessToken)
  );

  useEffect(() => {
    if (!(error?.response?.status === 401 || accessToken)) {
      return;
    }
    const refreshUserTokens = async () => {
      try {
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          await AuthService.refresh(refreshToken);
        setUserToken({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });
        setCookie('ACCESS_TOKEN', newAccessToken);
        setCookie('REFRESH_TOKEN', newRefreshToken);
      } catch (error) {}
    };
    refreshUserTokens();
  }, [error]);

  return { data, error, mutate, setUserToken };
};
