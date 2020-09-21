import React from 'react';
import { AppProvider } from '../src/providers/app.provider';
import 'antd/dist/antd.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <AppProvider>
      <Story />
    </AppProvider>
  ),
];
