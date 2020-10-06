/* eslint-disable no-param-reassign */
import { authStorage } from '@context/auth/auth.storage';

const prepareResponse = (text: string, json: any) => ({
  ok: true,
  json: () => Promise.resolve(json),
  text: () => Promise.resolve(text),
});

const isUnauthorizedResponse = (json: any) =>
  json?.error === 'Unauthorized.' ||
  (json?.errors?.length && json?.errors[0]?.message === 'Unauthorized.');

export const authFetch = async (uri: string, options: any): Promise<Response> => {
  const accessToken = authStorage.getAccessToken();

  if (accessToken) {
    options.headers.authorization = `Bearer ${accessToken}`;
  }

  const result = await fetch(uri, options);

  const text = await result.text();
  const json = JSON.parse(text);

  if (!isUnauthorizedResponse(json)) {
    return prepareResponse(text, json) as Response;
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

    return prepareResponse(text, json) as Response;
  }

  authStorage.setAccessToken(refreshTokenResponseJson.accessToken);

  if (authStorage.getAccessToken()) {
    options.headers.authorization = `Bearer ${authStorage.getAccessToken()}`;
  }

  return fetch(uri, options);
};
