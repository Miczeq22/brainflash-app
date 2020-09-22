import { AuthAction, authReducer, AuthState } from '@context/auth/auth.reducer';
import { AuthContext, initialAuthState } from '@context/auth/auth.context';
import React from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = React.useReducer<React.Reducer<AuthState, AuthAction>>(
    authReducer,
    initialAuthState,
  );

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
