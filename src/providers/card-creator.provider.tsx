import {
  CardCreatorContext,
  initialCardCreatorState,
} from '@context/card-creator/card-creator.context';
import {
  CardCreatorAction,
  cardCreatorReducer,
  CardCreatorState,
} from '@context/card-creator/card-creator.reducer';
import React from 'react';

interface CardCreatorProviderProps {
  children: React.ReactNode;
}

export const CardCreatorProvider = ({ children }: CardCreatorProviderProps) => {
  const [state, dispatch] = React.useReducer<React.Reducer<CardCreatorState, CardCreatorAction>>(
    cardCreatorReducer,
    initialCardCreatorState,
  );

  return (
    <CardCreatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CardCreatorContext.Provider>
  );
};
