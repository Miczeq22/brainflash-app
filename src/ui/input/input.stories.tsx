import React from 'react';
import { Input } from './input.component';
import { UserOutlined } from '@ant-design/icons';

export default {
  title: 'Input',
  component: Input,
};

export const Default = (args) => (
  <div
    style={{
      maxWidth: '20vw',
    }}
  >
    <Input {...args} />
  </div>
);

export const WithPrefix = (args) => (
  <div
    style={{
      maxWidth: '20vw',
    }}
  >
    <Input {...args} prefix={<UserOutlined />} placeholder="Enter your login..." />
  </div>
);

export const WithError = (args) => (
  <div
    style={{
      maxWidth: '20vw',
    }}
  >
    <Input
      {...args}
      prefix={<UserOutlined />}
      placeholder="Enter your login..."
      touched
      error="Login is invalid"
    />
  </div>
);

WithError.args = {
  error: 'Login is invalid',
};

Default.args = {
  placeholder: 'Enter input data...',
};
