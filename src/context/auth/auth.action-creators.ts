import {
  AuthAction,
  CLEAR_TOKENS,
  REGISTERED_SUCCESSFULLY,
  SET_TOKENS,
  SET_USER_DATA,
} from './auth.reducer';

export const setTokens: (accessToken: string, refreshToken: string) => AuthAction = (
  accessToken,
  refreshToken,
) => ({
  type: SET_TOKENS,
  accessToken,
  refreshToken,
});

export const registerUser: () => AuthAction = () => ({
  type: REGISTERED_SUCCESSFULLY,
});

export const logout: () => AuthAction = () => ({
  type: CLEAR_TOKENS,
});

export const setUserData: (username: string, userId: string) => AuthAction = (
  username,
  userId,
) => ({
  type: SET_USER_DATA,
  username,
  userId,
});
