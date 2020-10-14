import {
  DeckCreatorContext,
  DeckCreatorStateApi,
} from '@context/deck-creator/deck-creator.context';
import React from 'react';

export const useDeckCreatorState = (): DeckCreatorStateApi => {
  const context = React.useContext(DeckCreatorContext) as DeckCreatorStateApi;

  if (!context || !context.dispatch) {
    throw new Error('useDeckCreatorState must be used within an DeckCreatorProvider.');
  }

  return context;
};
