import React from 'react';
import { LoginForm } from './login-form.component';

export default {
  title: 'Login Form',
  component: LoginForm,
  argTypes: {
    onSubmit: {
      action: 'onSubmit',
    },
  },
};

export const Default = (args) => <LoginForm {...args} />;
