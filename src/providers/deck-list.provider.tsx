import { DeckListContext, initialDeckListState } from '@context/deck-list/deck-list.context';
import {
  DeckListAction,
  deckListReducer,
  DeckListState,
} from '@context/deck-list/deck-list.reducer';
import React from 'react';

interface DeckListProviderProps {
  children: React.ReactNode;
}

export const DeckListProvider = ({ children }: DeckListProviderProps) => {
  const [state, dispatch] = React.useReducer<React.Reducer<DeckListState, DeckListAction>>(
    deckListReducer,
    initialDeckListState,
  );

  return (
    <DeckListContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DeckListContext.Provider>
  );
};
