import { createClient } from 'react-fetching-library';
import { ApiAction } from 'src/types';
import { requestAuthInterceptor } from './request-auth.interceptor';

describe('Request auth interceptor', () => {
  test('should add authorization header', async () => {
    const accessToken = '#access-token';
    const client = createClient();

    const action: ApiAction<unknown> = {
      endpoint: '/ednpoint',
      method: 'GET',
    };

    expect(await requestAuthInterceptor(accessToken)(client)(action)).toEqual({
      ...action,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  });

  test('should add empty token if access token does not exist', async () => {
    const client = createClient();

    const action: ApiAction<unknown> = {
      endpoint: '/ednpoint',
      method: 'GET',
    };

    expect(await requestAuthInterceptor(null)(client)(action)).toEqual({
      ...action,
      headers: {
        Authorization: 'Bearer ',
      },
    });
  });

  test('should not override existing headers', async () => {
    const client = createClient();

    const action: ApiAction<unknown> = {
      endpoint: '/ednpoint',
      method: 'GET',
      headers: {
        header: '#header',
      },
    };

    expect(await requestAuthInterceptor(null)(client)(action)).toEqual({
      ...action,
      headers: {
        Authorization: 'Bearer ',
        header: '#header',
      },
    });
  });

  test('should not add authorization header if skipAuthorization is active', async () => {
    const client = createClient();

    const action: ApiAction<unknown> = {
      endpoint: '/ednpoint',
      method: 'GET',
      config: {
        skipAuthorization: true,
      },
    };

    expect(await requestAuthInterceptor(null)(client)(action)).toEqual(action);
  });
});
