import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useRecoilState } from 'recoil';

import { setCookie } from 'src/lib/utils/cookie';
import { getEncryptedString } from 'src/lib/utils/crypto';
import AuthService from 'src/services/api/auth';
import { userState } from 'src/atoms/user';

export default function LoginRedirectPage() {
  const router = useRouter();
  const [_, setUser] = useRecoilState(userState);

  useEffect(() => {
    const login = async () => {
      if (!router?.query?.code) {
        return;
      }
      const { code, scope } = router.query;
      const provider = scope?.includes('google') ? 'google' : 'github';
      try {
        const { accessToken, refreshToken, ...userData } =
          await AuthService.login(provider, code as string);
        setCookie('ACCESS_TOKEN', accessToken);
        setCookie('REFRESH_TOKEN', refreshToken);
        setUser(userData);
        alert('로그인 성공!');
        router.push('/');
      } catch (err) {
        switch (err?.response?.status) {
          // case 401:
          //   @401 메세지 필요시 추가
          case 404:
            const { accessToken, email } = err?.response?.data;
            const encryptedAccessToken = getEncryptedString(accessToken);
            alert('가입되지 않은 계정입니다. 회원가입 페이지로 이동합니다.');
            router.push(
              `/join?email=${email}&pv=${provider}&at=${encryptedAccessToken}`
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

  return <></>;
}
