import React from 'react';

import { useLoginRedirect } from 'src/hooks/api/auth';

export default function LoginRedirectPage() {
  useLoginRedirect();

  return <></>;
}
