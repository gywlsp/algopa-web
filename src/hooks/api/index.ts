import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import useSWR, { SWRResponse, SWRConfiguration } from 'swr';
import { useAuthTokens } from './auth';

export type GetRequest = AxiosRequestConfig | null;

export interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    'initialData'
  > {
  initialData?: Data;
}

export default function useRequest<Data = unknown, Error = unknown>(
  request: GetRequest,
  config: Config<Data, Error> = {}
): Return<Data, Error> {
  const {
    authTokens: { accessToken },
  } = useAuthTokens();
  const authedRequest = {
    ...request,
    headers: {
      Authorization: accessToken,
    },
  };

  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request && JSON.stringify(authedRequest),
    /**
     * NOTE: Typescript thinks `request` can be `null` here, but the fetcher
     * function is actually only called by `useSWR` when it isn't.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => axios(authedRequest),
    {
      ...config,
    }
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    mutate,
  };
}
