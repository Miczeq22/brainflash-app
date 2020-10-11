import { authStorage } from '@context/auth/auth.storage';
import { RequestInterceptor } from 'react-fetching-library';
import { ApiAction } from 'src/types';

export const requestAuthInterceptor = (): RequestInterceptor => () => async (
  action: ApiAction<unknown>,
) => {
  if (action.config?.skipAuthorization) {
    return action;
  }

  return {
    ...action,
    headers: {
      ...action.headers,
      Authorization: `Bearer ${authStorage.getAccessToken() ?? ''}`,
    },
  };
};
