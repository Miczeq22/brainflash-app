import { selectDeckFromList } from './deck-list.action-creators';
import { SET_DECK_ID } from './deck-list.reducer';

describe('Deck List action creators', () => {
  test('creates selectDeckFromList action', () => {
    const deckId = '#deck-id';

    expect(selectDeckFromList(deckId)).toEqual({
      type: SET_DECK_ID,
      deckId,
    });
  });
});
