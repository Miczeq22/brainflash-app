import React from 'react';
import { DeckCreatorAction, DeckCreatorState } from './deck-creator.reducer';

export interface DeckCreatorStateApi {
  state: DeckCreatorState;
  dispatch: React.Dispatch<DeckCreatorAction>;
}

export const initialDeckCreatorState: DeckCreatorState = {
  imageUrl: null,
  uploadingImage: false,
  imageStepDone: false,
  name: 'Title goes here...',
  description: 'Description goes here...',
  tags: [],
};

export const DeckCreatorContext = React.createContext<DeckCreatorState | DeckCreatorStateApi>(
  initialDeckCreatorState,
);
