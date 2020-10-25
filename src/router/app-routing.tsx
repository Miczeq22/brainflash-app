import { DeckCreatorPage } from '@pages/deck-creator/deck-creator.page';
import { DeckDetailsPage } from '@pages/deck-details/deck-details.page';
import { HomePage } from '@pages/home/home.page';
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

export const AppRoutes = () => (
  <Switch>
    <GuestRoute path="/login" exact component={LoginPage} />
    <GuestRoute path="/register" exact component={RegisterPage} />
    <AuthenticatedRoute path="/" exact component={HomePage} />
    <AuthenticatedRoute path="/your-decks" exact component={YourDecks} />
    <AuthenticatedRoute path="/enrolled-decks" exact component={EnrolledDecks} />
    <DeckDetailsProvider>
      <AuthenticatedRoute path="/deck-details/:id" exact component={DeckDetailsPage} />
    </DeckDetailsProvider>
    <DeckCreatorProvider>
      <AuthenticatedRoute path="/deck-creator" exact component={DeckCreatorPage} />
    </DeckCreatorProvider>
  </Switch>
);
