import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import { getCookie } from 'src/lib/utils/cookie';

export const useCodeSocket = () => {
  const router = useRouter();
  const [socket, setSocket] = useState(undefined);

  useEffect(() => {
    const URL = process.env.NEXT_PUBLIC_WEB_SOCKET_API_HOST + '/ide';
    const socket = io(URL, {
      secure: true,
      query: {
        // 처음 소켓 연결 시 eventLastIndex를 받을 problem id
        problemId: String(router.query.id),
      },
      auth: {
        // 로그인 시 발급받은 JWT
        Authorization: getCookie('ACCESS_TOKEN'),
      },
    });
    setSocket(socket);
  }, []);

  return { socket };
};
