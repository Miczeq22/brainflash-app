import { DeckListAction, SET_DECK_ID } from './deck-list.reducer';

export const selectDeckFromList = (deckId: string): DeckListAction => ({
  type: SET_DECK_ID,
  deckId,
});
