import React from 'react';

import LoginButton from '.';

import { getQueryString } from 'src/lib/utils';

const queryParameters = {
  access_type: 'offline',
  include_granted_scopes: true,
  state: 'state_parameter_passthrough_value',
  scope: 'email',
  response_type: 'code',
  redirect_uri: process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URI,
  client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
};

const queryString = getQueryString(queryParameters);

export default function GoogleLoginButton() {
  return (
    <LoginButton
      href={'https://accounts.google.com/o/oauth2/v2/auth' + queryString}
      serviceName="Google"
      serviceImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png"
    />
  );
}
