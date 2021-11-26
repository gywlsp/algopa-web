import { useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { authTokens } from 'src/modules/atoms/auth';
import { removeAuthCookie, setAuthCookie } from 'src/lib/utils/auth';
import { meReadConfig } from 'src/services/api/user/config';
import AuthService from 'src/services/api/auth';
import { AuthTokens } from 'src/types/user';

export const useLoginRedirect = () => {
  const router = useRouter();
  const setAuthTokens = useSetRecoilState(authTokens);

  useEffect(() => {
    const login = async () => {
      if (!router?.query?.code) {
        return;
      }
      const { code, scope } = router.query;
      const provider = scope?.includes('google') ? 'google' : 'github';
      try {
        const { accessToken, refreshToken } = await AuthService.login(
          provider,
          code as string
        );
        setAuthTokens({ accessToken, refreshToken });
        setAuthCookie({ accessToken, refreshToken });
        alert('로그인 성공!');
        router.push('/');
      } catch (err) {
        switch (err?.response?.status) {
          case 404:
            const { accessToken, email } = err?.response?.data;
            alert('가입되지 않은 계정입니다. 회원가입 페이지로 이동합니다.');
            router.push(
              `/join?email=${email}&pv=${provider}&at=${accessToken}`
            );
            break;
          default:
            alert('로그인에 실패했습니다.');
            router.push('/login');
            break;
        }
      }
    };

    login();
  }, [router.query]);
};

export const useRecentAuthTokens = (isLoginRequired?: boolean) => {
  const router = useRouter();
  const [tokens, setTokens] = useRecoilState(authTokens);
  const { accessToken, refreshToken } = tokens;

  const { error } = useSWR('/api/user', () => axios(meReadConfig()));

  useEffect(() => {
    if (error?.response?.status === 401 && accessToken) {
      const updateAuthTokens = (authTokens: AuthTokens) => {
        setTokens(authTokens);
        setAuthCookie(authTokens);
      };

      const removeAuthTokens = () => {
        setTokens({
          accessToken: null,
          refreshToken: null,
        });
        removeAuthCookie();
      };

      const refreshAuthTokens = async () => {
        try {
          const newAuthTokens = await AuthService.refresh(refreshToken);
          updateAuthTokens(newAuthTokens);
        } catch (error) {
          removeAuthTokens();
        }
      };

      refreshAuthTokens();
    } else if (isLoginRequired && error) {
      alert('로그인이 필요한 기능입니다.');
      router.push('/login');
    }
  }, [error]);

  return tokens;
};
