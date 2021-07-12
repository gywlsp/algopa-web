import React from 'react';

import LoginButton from '.';

import { getQueryString } from 'src/lib/utils';

const queryParameters = {
  scope: 'user:email',
  redirect_uri: process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URI,
  client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
};

const queryString = getQueryString(queryParameters);

export default function GithubLoginButton() {
  return (
    <LoginButton
      href={'https://github.com/login/oauth/authorize' + queryString}
      serviceName="Github"
      serviceImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
    />
  );
}
