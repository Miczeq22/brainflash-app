import {
  DeckCreatorContext,
  initialDeckCreatorState,
} from '@context/deck-creator/deck-creator.context';
import {
  DeckCreatorAction,
  deckCreatorReducer,
  DeckCreatorState,
} from '@context/deck-creator/deck-creator.reducer';
import React from 'react';

interface DeckCreatorProviderProps {
  children: React.ReactNode;
}

export const DeckCreatorProvider = ({ children }: DeckCreatorProviderProps) => {
  const [state, dispatch] = React.useReducer<React.Reducer<DeckCreatorState, DeckCreatorAction>>(
    deckCreatorReducer,
    initialDeckCreatorState,
  );

  return (
    <DeckCreatorContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DeckCreatorContext.Provider>
  );
};
