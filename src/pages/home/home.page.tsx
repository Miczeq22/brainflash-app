import { DeckListProvider } from '@providers/deck-list.provider';
import { Layout } from '@ui/layout/layout.component';
import React from 'react';

export const HomePage = () => (
  <Layout>
    <DeckListProvider>
      <h1>HELLO WORLD</h1>
    </DeckListProvider>
  </Layout>
);
