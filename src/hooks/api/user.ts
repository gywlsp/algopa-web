import useRequest from '.';
import { useEffect, useState } from 'react';
import Router from 'next/router';

import { getCookie, removeCookie, setCookie } from 'src/lib/utils/cookie';
import { meReadConfig } from 'src/services/api/user/config';
import AuthService from 'src/services/api/auth';
import { IUserReadDTO } from 'src/interfaces/user/IUser';
import { UserToken } from 'src/types/user';

export type UseMeParams = { isLoginRequired?: boolean };

export const useMe = (params: UseMeParams = { isLoginRequired: false }) => {
  const [userToken, setUserToken] = useState<UserToken>({
    accessToken: getCookie('ACCESS_TOKEN'),
    refreshToken: getCookie('REFRESH_TOKEN'),
  });
  const { accessToken, refreshToken } = userToken;

  const { data, error, mutate } = useRequest<IUserReadDTO>(
    meReadConfig(accessToken)
  );

  useEffect(() => {
    if (error?.code === 'EXPIRED_ACCESS_TOKEN') {
      const updateUserTokens = ({ accessToken, refreshToken }) => {
        setUserToken({
          accessToken,
          refreshToken,
        });
        setCookie('ACCESS_TOKEN', accessToken);
        setCookie('REFRESH_TOKEN', refreshToken);
      };

      const removeUserTokens = () => {
        setUserToken({
          accessToken: null,
          refreshToken: null,
        });
        removeCookie('ACCESS_TOKEN');
        removeCookie('REFRESH_TOKEN');
      };

      const refreshUserTokens = async () => {
        try {
          const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
            await AuthService.refresh(refreshToken);
          updateUserTokens({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          });
        } catch (error) {
          removeUserTokens();
        }
      };

      refreshUserTokens();
    } else if (params.isLoginRequired && error) {
      alert('로그인이 필요한 기능입니다.');
      Router.push('/login');
    }
  }, [error?.code]);

  return { data, error, mutate, setUserToken };
};
