import { LoginForm } from '@app/login/login-form.component';
import { setTokens } from '@context/auth/auth.action-creators';
import { useAuthState } from '@hooks/use-auth-state/use-auth-state';
import { Logo } from '@ui/logo/logo.component';
import React from 'react';
import { useMutation } from 'react-fetching-library';
import { loginAction } from 'src/api/actions/auth/auth.actions';
import { LoginPageContainer } from './login-page.styles';
import { message } from 'antd';

export interface LoginPayload {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const {
    dispatch,
    state: { isRegisteredSuccessfully },
  } = useAuthState();

  const { mutate } = useMutation(loginAction);

  React.useEffect(
    () => {
      if (isRegisteredSuccessfully) {
        message.success(
          'Account registered successfully. Please check your email and confirm account.',
        );
      }
    },
    // eslint-disable-next-line
    [],
  );

  const handleLoginSubmit = async (payload: LoginPayload) => {
    const { payload: response, error } = await mutate(payload);

    if (error && response) {
      message.error(response.error);
    }

    if (!error && response) {
      dispatch(setTokens(response.accessToken, response.refreshToken));
    }
  };

  return (
    <LoginPageContainer>
      <Logo />
      <LoginForm onSubmit={handleLoginSubmit} />
    </LoginPageContainer>
  );
};
