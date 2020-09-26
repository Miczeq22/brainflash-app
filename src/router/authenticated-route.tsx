import { useAuthState } from '@hooks/use-auth-state/use-auth-state';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export const AuthenticatedRoute = (props: RouteProps) => {
  const {
    state: { isAuthorized },
  } = useAuthState();

  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};
