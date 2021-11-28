import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { removeAuthCookie, setAuthCookie } from 'src/lib/utils/auth';
import AuthService from 'src/services/api/auth';
import { authTokens } from 'src/modules/atoms/auth';
import { AuthTokens } from 'src/types/user';
import { useMe } from './user';

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

export const useAuthTokens = () => {
  const [tokens, setTokens] = useRecoilState(authTokens);

  const setAuthTokens = (authTokens: AuthTokens) => {
    setTokens(authTokens);
  };

  const removeAuthTokens = () => {
    setTokens({
      accessToken: null,
      refreshToken: null,
    });
  };

  return { authTokens: tokens, setAuthTokens, removeAuthTokens };
};

export const useAuth = (params?: { isLoginRequired: boolean }) => {
  const router = useRouter();
  const { error } = useMe();
  const { authTokens, setAuthTokens, removeAuthTokens } = useAuthTokens();
  const { accessToken, refreshToken } = authTokens;

  useEffect(() => {
    if (error?.response?.status === 401 && accessToken) {
      const updateAuth = (authTokens: AuthTokens) => {
        setAuthTokens(authTokens);
        setAuthCookie(authTokens);
      };

      const removeAuth = () => {
        removeAuthTokens();
        removeAuthCookie();
      };

      const refreshAuth = async () => {
        try {
          const newAuthTokens = await AuthService.refresh(refreshToken);
          updateAuth(newAuthTokens);
        } catch (error) {
          removeAuth();
        }
      };

      refreshAuth();
    } else if (params?.isLoginRequired && error) {
      alert('로그인이 필요한 기능입니다.');
      router.push('/login');
    }
  }, [error]);

  return authTokens;
};
