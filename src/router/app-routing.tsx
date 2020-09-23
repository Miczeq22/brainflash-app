import { LoginPage } from '@pages/login/login.page';
import { RegisterPage } from '@pages/register/register.page';
import React from 'react';
import { Switch } from 'react-router-dom';
import { GuestRoute } from './guest-route';

export const AppRoutes = () => (
  <Switch>
    <GuestRoute path="/login" exact component={LoginPage} />
    <GuestRoute path="/register" exact component={RegisterPage} />
  </Switch>
);
