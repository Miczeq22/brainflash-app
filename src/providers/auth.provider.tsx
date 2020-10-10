import { AuthAction, authReducer, AuthState } from '@context/auth/auth.reducer';
import { AuthContext, initialAuthState } from '@context/auth/auth.context';
import React from 'react';
import { authStorage } from '@context/auth/auth.storage';
import jwt from 'jsonwebtoken';
import { setUserData } from '@context/auth/auth.action-creators';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = React.useReducer<React.Reducer<AuthState, AuthAction>>(authReducer, {
    ...initialAuthState,
    accessToken: authStorage.getAccessToken() ?? '',
    refreshToken: authStorage.getRefreshToken() ?? '',
    isAuthorized: authStorage.getAccessToken() !== null,
  });

  React.useEffect(() => {
    authStorage.setAccessToken(state.accessToken);
    authStorage.setRefreshToken(state.refreshToken);

    const jwtPayload = jwt.decode(state.accessToken) as { userId: string; username: string };

    if (jwtPayload) {
      dispatch(setUserData(jwtPayload.username, jwtPayload.userId));
    }
  }, [state.accessToken, state.refreshToken]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
