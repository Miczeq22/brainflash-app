import { DeckCreatorPage } from '@pages/deck-creator/deck-creator.page';
import { DeckDetailsPage } from '@pages/deck-details/deck-details.page';
import { LoginPage } from '@pages/login/login.page';
import { RegisterPage } from '@pages/register/register.page';
import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthenticatedRoute } from './authenticated-route';
import { GuestRoute } from './guest-route';
import { DeckCreatorProvider } from '@providers/deck-creator.provider';
import { YourDecks } from '@pages/your-decks/your-decks.page';
import { EnrolledDecks } from '@pages/enrolled-decks/enrolled-decks.component';
import { DeckDetailsProvider } from '@providers/deck-details.provider';
import { HomePage } from '@pages/home/home.page';

export const AppRoutes = () => (
  <Switch>
    <GuestRoute path="/login" component={LoginPage} />
    <GuestRoute path="/register" component={RegisterPage} />
    <AuthenticatedRoute
      path="/"
      render={() => (
        <>
          <DeckCreatorProvider>
            <AuthenticatedRoute path="/deck-creator" component={DeckCreatorPage} />
          </DeckCreatorProvider>
          <DeckDetailsProvider>
            <AuthenticatedRoute exact path="/deck-details/:id" component={DeckDetailsPage} />
          </DeckDetailsProvider>
          <AuthenticatedRoute path="/enrolled-decks" component={EnrolledDecks} />
          <AuthenticatedRoute path="/your-decks" component={YourDecks} />
          <AuthenticatedRoute exact path="/" component={HomePage} />
        </>
      )}
    />
  </Switch>
);
