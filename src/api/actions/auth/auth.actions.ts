import { ApiAction } from 'src/types';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const loginAction = (payload: LoginPayload): ApiAction<LoginResponse> => ({
  method: 'POST',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/user-access/login`,
  body: payload,
});
