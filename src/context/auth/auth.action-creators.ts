import { AuthAction, SET_TOKENS } from './auth.reducer';

export const setTokens: (accessToken: string, refreshToken: string) => AuthAction = (
  accessToken,
  refreshToken,
) => ({
  type: SET_TOKENS,
  accessToken,
  refreshToken,
});
