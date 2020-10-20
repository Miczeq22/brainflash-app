import React from 'react';
import { DeckCreatorAction, DeckCreatorState } from './deck-creator.reducer';

export interface DeckCreatorStateApi {
  state: DeckCreatorState;
  dispatch: React.Dispatch<DeckCreatorAction>;
}

export const initialDeckCreatorState: DeckCreatorState = {
  imageUrl: null,
  imageName: null,
  uploadingImage: false,
  name: '',
  description: '',
  tags: [],
  step: 0,
  isReadyToSubmit: false,
};

export const DeckCreatorContext = React.createContext<DeckCreatorState | DeckCreatorStateApi>(
  initialDeckCreatorState,
);
