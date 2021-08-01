/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, Method } from 'axios';
import { IncomingMessage } from 'http';
import { getCookie } from 'src/lib/utils/cookie';

class RequestConfig {
  public baseURL: string;
  public headers?: any;
  public method?: Method;
  public url?: string;
  public data?: any;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public setToken(token?: any) {
    if (!token) {
      return;
    }
    this.headers = {
      Authorization: token,
    };
  }

  public get(path: string, config?: AxiosRequestConfig) {
    this.method = 'GET';
    this.url = this.baseURL + path;

    return { ...config, ...this };
  }

  public delete(path: string, config?: AxiosRequestConfig) {
    this.method = 'DELETE';
    this.url = this.baseURL + path;

    return { ...config, ...this };
  }

  public post(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'POST';
    this.url = this.baseURL + path;
    this.data = data;

    return { ...config, ...this };
  }

  public put(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'PUT';
    this.url = this.baseURL + path;
    this.data = data;

    return { ...config, ...this };
  }

  public patch(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'PATCH';
    this.url = this.baseURL + path;
    this.data = data;

    return { ...config, ...this };
  }
}

export const baseConfig = (
  auth?: boolean,
  token?: string,
  req?: IncomingMessage
) => {
  const requestConfig = new RequestConfig(process.env.NEXT_PUBLIC_API_HOST);
  if (token) {
    requestConfig.setToken(token);
  } else if (auth) {
    requestConfig.setToken(getCookie('ACCESS_TOKEN', req));
  }
  return requestConfig;
};
