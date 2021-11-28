import React from 'react';

import { useLoginRedirect } from 'src/hooks/auth';

export default function LoginRedirectPage() {
  useLoginRedirect();

  return <></>;
}
