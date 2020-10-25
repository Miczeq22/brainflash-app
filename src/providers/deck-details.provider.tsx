import {
  DeckDetailsContext,
  initialDeckDetailsState,
} from '@context/deck-details/deck-details.context';
import {
  DeckDetailsAction,
  deckDetailsReducer,
  DeckDetailsState,
} from '@context/deck-details/deck-details.reducer';
import React from 'react';

interface DeckDetailsProviderProps {
  children: React.ReactNode;
}

export const DeckDetailsProvider = ({ children }: DeckDetailsProviderProps) => {
  const [state, dispatch] = React.useReducer<React.Reducer<DeckDetailsState, DeckDetailsAction>>(
    deckDetailsReducer,
    initialDeckDetailsState,
  );

  return (
    <DeckDetailsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DeckDetailsContext.Provider>
  );
};
