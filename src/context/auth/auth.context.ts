import React from 'react';
import { AuthAction, AuthState } from './auth.reducer';

export interface AuthStateApi {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

export const initialAuthState: AuthState = {
  accessToken: '',
  refreshToken: '',
  isAuthorized: false,
  isRegisteredSuccessfully: false,
  username: '',
  userId: '',
};

export const AuthContext = React.createContext<AuthState | AuthStateApi>(initialAuthState);
