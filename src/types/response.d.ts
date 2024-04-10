interface ResGeneric<T> {
  data: T;
  status: number;
  statusText: string;
  headers: WelcomeHeaders;
  config: Config;
  request: Request;
}

interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Env;
  headers: ConfigHeaders;
  baseURL: string;
  method: string;
  url: string;
}

interface Env {}

interface ConfigHeaders {
  Accept: string;
  'app-id': string;
}

interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

interface WelcomeHeaders {
  'cache-control': string;
  'content-type': string;
}

interface Request {
  requestMethod: string;
  __METHOD__: string;
  __URL__: string;
}
