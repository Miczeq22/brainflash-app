import React from 'react';
import { DeckDetailsAction, DeckDetailsState } from './deck-details.reducer';

export interface DeckDetailsStateApi {
  state: DeckDetailsState;
  dispatch: React.Dispatch<DeckDetailsAction>;
}

export const initialDeckDetailsState: DeckDetailsState = {
  isEditNameMode: false,
  shouldReloadData: false,
};

export const DeckDetailsContext = React.createContext<DeckDetailsState | DeckDetailsStateApi>(
  initialDeckDetailsState,
);
