import { ApiAction } from 'src/types';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  error?: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  username: string;
}

export interface RegisterReposnse {
  success: boolean;
  error?: string;
}

export const loginAction = (payload: LoginPayload): ApiAction<LoginResponse> => ({
  method: 'POST',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/user-access/login`,
  body: payload,
  config: {
    skipAuthorization: true,
  },
});

export const registerAction = (payload: RegisterPayload): ApiAction<RegisterReposnse> => ({
  method: 'POST',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/register`,
  body: payload,
  config: {
    skipAuthorization: true,
  },
});
