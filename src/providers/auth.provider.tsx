import { AuthAction, authReducer, AuthState } from '@context/auth/auth.reducer';
import { AuthContext, initialAuthState } from '@context/auth/auth.context';
import React from 'react';
import { authStorage } from '@context/auth/auth.storage';

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
