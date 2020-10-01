import { DeckListContext, DeckListStateApi } from '@context/deck-list/deck-list.context';
import React from 'react';

export const useDeckListState = (): DeckListStateApi => {
  const context = React.useContext(DeckListContext) as DeckListStateApi;

  if (!context || !context.dispatch) {
    throw new Error('useDeckList must be used within DeckListProvider.');
  }

  return context;
};
