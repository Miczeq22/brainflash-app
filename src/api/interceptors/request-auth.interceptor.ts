import { RequestInterceptor } from 'react-fetching-library';
import { ApiAction } from 'src/types';

export const requestAuthInterceptor = (
  accessToken: string | null,
): RequestInterceptor => () => async (action: ApiAction<unknown>) => {
  if (action.config?.skipAuthorization) {
    return action;
  }

  return {
    ...action,
    headers: {
      Authorization: `Bearer ${accessToken ?? ''}`,
      ...action.headers,
    },
  };
};
