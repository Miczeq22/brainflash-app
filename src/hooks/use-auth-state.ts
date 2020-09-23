import { AuthContext, AuthStateApi } from '@context/auth/auth.context';
import React from 'react';

export const useAuthState = (): AuthStateApi => {
  const context = React.useContext(AuthContext) as AuthStateApi;

  if (!context) {
    throw new Error('useAuthState must be used within an AuthProvider');
  }

  return context;
};
