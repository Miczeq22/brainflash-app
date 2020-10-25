import {
  DeckDetailsContext,
  DeckDetailsStateApi,
} from '@context/deck-details/deck-details.context';
import React from 'react';

export const useDeckDetailsState = (): DeckDetailsStateApi => {
  const context = React.useContext(DeckDetailsContext) as DeckDetailsStateApi;

  if (!context || !context.dispatch) {
    throw new Error('useDeckDetailsState must be used within DeckDetailsProvider.');
  }

  return context;
};
