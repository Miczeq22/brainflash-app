import React from 'react';
import { DeckListState, DeckListAction } from './deck-list.reducer';

export interface DeckListStateApi {
  state: DeckListState;
  dispatch: React.Dispatch<DeckListAction>;
}

export const initialDeckListState: DeckListState = {
  selectedDeckId: null,
};

export const DeckListContext = React.createContext<DeckListState | DeckListStateApi>(
  initialDeckListState,
);
