import {TypeStateAuth} from '../utils';

export interface AuthState {
  loading: boolean;
  token?: string;
  credentials: {
    name?: string;
    email: string;
    photo?: string;
  };
  isLogin: TypeStateAuth;
  isShowOnboarding: boolean;
  msmError?: string;
  showMsmError: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
