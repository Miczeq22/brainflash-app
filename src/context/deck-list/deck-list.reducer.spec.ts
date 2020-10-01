import { selectDeckFromList } from './deck-list.action-creators';
import { initialDeckListState } from './deck-list.context';
import { deckListReducer } from './deck-list.reducer';

describe('Deck List reducer', () => {
  test('handles SET_DECK_ID action', () => {
    expect(deckListReducer(initialDeckListState, selectDeckFromList('#deck-id'))).toEqual({
      ...initialDeckListState,
      selectedDeckId: '#deck-id',
    });
  });
});
