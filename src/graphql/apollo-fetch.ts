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

export const apolloFetch = async (uri: string, options: any): Promise<Response> => {
  const accessToken = authStorage.getAccessToken();

  if (accessToken) {
    options.headers.authorization = `Bearer ${accessToken}`;
  }

  const result = await fetch(uri, options);

  const text = await result.text();
  const json = JSON.parse(text);

  if (isUnauthorizedResponse(json)) {
    authStorage.setAccessToken(null);
    authStorage.setRefreshToken(null);

    return prepareResponse(text, json) as Response;
  }

  return fetch(uri, options);
};
