import { HomePage } from '@pages/home/home.page';
import { LoginPage } from '@pages/login/login.page';
import { RegisterPage } from '@pages/register/register.page';
import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthenticatedRoute } from './authenticated-route';
import { GuestRoute } from './guest-route';

export const AppRoutes = () => (
  <Switch>
    <GuestRoute path="/login" exact component={LoginPage} />
    <GuestRoute path="/register" exact component={RegisterPage} />
    <AuthenticatedRoute path="/" exact component={HomePage} />
  </Switch>
);
