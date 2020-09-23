import React from 'react';
import { RegisterForm } from './register-form.component';

export default {
  title: 'Register Form',
  component: RegisterForm,
  argTypes: {
    onSubmit: {
      action: 'onSubmit',
    },
  },
};

export const Default = (args) => <RegisterForm {...args} />;
