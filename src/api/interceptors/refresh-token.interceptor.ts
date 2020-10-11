/* eslint-disable no-param-reassign */
import { authStorage } from '@context/auth/auth.storage';
import { ApiAction } from 'src/types';
import jwt from 'jsonwebtoken';

const isUnauthorizedResponse = (json: any) =>
  json?.error === 'Unauthorized.' ||
  (json?.errors?.length && json?.errors[0]?.message === 'Unauthorized.');

export const refreshTokenInterceptor = () => () => async (action: ApiAction<any>) => {
  if (action.config?.skipAuthorization) {
    return action;
  }

  const { payload } = jwt.decode(authStorage.getAccessToken() ?? '', { complete: true }) as any;

  if (payload.exp > Date.now() / 1000) {
    return action;
  }

  const refreshTokenResponse = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/user-access/refresh-token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        refreshToken: authStorage.getRefreshToken(),
      }),
    },
  );

  const refreshTokenResponseJson = await refreshTokenResponse.json();

  if (isUnauthorizedResponse(refreshTokenResponseJson)) {
    authStorage.setAccessToken(null);
    authStorage.setRefreshToken(null);
  } else {
    const token = refreshTokenResponseJson.accessToken;

    authStorage.setAccessToken(token);

    action.headers = {
      ...action.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return action;
};
