import {APP_URL, DUMMY_API_KEY} from '@env';
import axios, {AxiosError, AxiosResponse} from 'axios';

import {setLogout} from '../redux/slices/auth';
import {AppDispatch, RootState} from '../redux/store';

export const serviceBasePrivate = axios.create({baseURL: APP_URL});

export const setupAxiosInterceptors = (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  serviceBasePrivate.interceptors.request.use(
    async config => {
      const {token} = getState().auth;
      if (DUMMY_API_KEY && token) {
        config.headers['app-id'] = `${DUMMY_API_KEY}`;
      }

      return config;
    },
    (err: AxiosError) => {
      return Promise.reject(err);
    },
  );

  serviceBasePrivate.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const {token} = getState().auth;
      if (error.response?.status === 401 || !token) {
        dispatch(setLogout());
      }
      return Promise.reject(error);
    },
  );
};
