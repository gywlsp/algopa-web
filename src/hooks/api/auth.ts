import useSWR from 'swr';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useRecoilState } from 'recoil';

import { authTokens } from 'src/modules/atoms/auth';
import { removeCookie, setCookie } from 'src/lib/utils/cookie';
import { meReadConfig } from 'src/services/api/user/config';
import AuthService from 'src/services/api/auth';

export const useLoginRedirect = () => {
  const router = useRouter();

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
        setCookie('ACCESS_TOKEN', accessToken);
        setCookie('REFRESH_TOKEN', refreshToken);
        alert('로그인 성공!');
        router.push('/');
      } catch (err) {
        switch (err?.response?.status) {
          // case 401:
          //   @401 메세지 필요시 추가
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
      const updateAuthTokens = ({ accessToken, refreshToken }) => {
        setTokens({
          accessToken,
          refreshToken,
        });
        setCookie('ACCESS_TOKEN', accessToken);
        setCookie('REFRESH_TOKEN', refreshToken);
      };

      const removeAuthTokens = () => {
        setTokens({
          accessToken: null,
          refreshToken: null,
        });
        removeCookie('ACCESS_TOKEN');
        removeCookie('REFRESH_TOKEN');
      };

      const refreshAuthTokens = async () => {
        try {
          const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
            await AuthService.refresh(refreshToken);
          updateAuthTokens({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          });
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

  return { accessToken, refreshToken };
};
