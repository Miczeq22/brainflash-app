import { useQuery } from '@apollo/client';
import { DeckList } from '@app/home/deck-list/deck-list.component';
import { GET_DECKS_QUERY } from '@graphql/queries/get-decks.query';
import { DeckListProvider } from '@providers/deck-list.provider';
import { Layout } from '@ui/layout/layout.component';
import React from 'react';

export const HomePage = () => {
  const { data, loading } = useQuery(GET_DECKS_QUERY);

  return (
    <Layout>
      <DeckListProvider>
        <DeckList decks={loading ? [] : data.getAllDecks} />
      </DeckListProvider>
    </Layout>
  );
};
