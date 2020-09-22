import { LoginForm } from '@app/login/login-form.component';
import { Logo } from '@ui/logo/logo.component';
import React from 'react';
import { useMutation } from 'react-fetching-library';
import { loginAction } from 'src/api/actions/auth/auth.actions';
import { LoginPageContainer } from './login-page.styles';

export interface LoginPayload {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { mutate } = useMutation(loginAction);

  const handleLoginSubmit = async (payload: LoginPayload) => {
    await mutate(payload);
  };

  return (
    <LoginPageContainer>
      <Logo />
      <LoginForm onSubmit={handleLoginSubmit} />
    </LoginPageContainer>
  );
};
