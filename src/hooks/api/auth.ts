import useSWR from 'swr';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useRecoilState } from 'recoil';

import { authTokens } from 'src/modules/atoms/auth';
import { removeCookie, setCookie } from 'src/lib/utils/cookie';
import { meReadConfig } from 'src/services/api/user/config';
import AuthService from 'src/services/api/auth';

export const useRecentAuthTokens = (isLoginRequired?: boolean) => {
  const router = useRouter();
  const [tokens, setTokens] = useRecoilState(authTokens);
  const { accessToken, refreshToken } = tokens;

  const { error } = useSWR('/api/user', () => axios(meReadConfig()));

  useEffect(() => {
    if (error?.response?.status === 401 && accessToken) {
      const updateUserTokens = ({ accessToken, refreshToken }) => {
        setTokens({
          accessToken,
          refreshToken,
        });
        setCookie('ACCESS_TOKEN', accessToken);
        setCookie('REFRESH_TOKEN', refreshToken);
      };

      const removeUserTokens = () => {
        setTokens({
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
    } else if (isLoginRequired && error) {
      alert('로그인이 필요한 기능입니다.');
      router.push('/login');
    }
  }, [error]);

  return { accessToken, refreshToken };
};
