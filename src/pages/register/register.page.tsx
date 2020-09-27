import { registerAction } from '@api/actions/auth/auth.actions';
import { RegisterForm, RegisterInput } from '@app/register/register-form.component';
import { registerUser } from '@context/auth/auth.action-creators';
import { useAuthState } from '@hooks/use-auth-state/use-auth-state.hook';
import { Logo } from '@ui/logo/logo.component';
import { message } from 'antd';
import React from 'react';
import { useMutation } from 'react-fetching-library';
import { useHistory } from 'react-router-dom';
import { RegisterPageContainer } from './register-page.styles';

export const RegisterPage = () => {
  const history = useHistory();
  const { mutate } = useMutation(registerAction);
  const { dispatch } = useAuthState();

  const handleRegisterSubmit = async ({
    addToMailingList,
    confirmPassword,
    termsAccepted,
    ...payload
  }: RegisterInput) => {
    const { error, payload: response } = await mutate(payload);

    if (error) {
      message.error(response?.error);
    }

    if (!error && response?.success) {
      dispatch(registerUser());

      history.push('/login');
    }
  };

  return (
    <RegisterPageContainer>
      <Logo />
      <RegisterForm onSubmit={handleRegisterSubmit} />
    </RegisterPageContainer>
  );
};
