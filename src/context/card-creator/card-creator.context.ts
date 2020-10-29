import React from 'react';
import { CardCreatorAction, CardCreatorState } from './card-creator.reducer';

export interface CardCreatorStateApi {
  state: CardCreatorState;
  dispatch: React.Dispatch<CardCreatorAction>;
}

export const initialCardCreatorState: CardCreatorState = {
  answer: '',
  question: '',
  step: 0,
};

export const CardCreatorContext = React.createContext<CardCreatorState | CardCreatorStateApi>(
  initialCardCreatorState,
);
