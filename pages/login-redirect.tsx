import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function LoginRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    const { code } = router.query;
    if (router.query.code) {
      console.log(code);
      router.push('/');
    }
  }, [router.query]);

  return <></>;
}
