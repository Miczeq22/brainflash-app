export interface DeckListState {
  selectedDeckId: string | null;
}

export interface DeckListAction {
  type: string;
  deckId?: string;
}

export const SET_DECK_ID = 'deck-list/set-deck-id';

export const deckListReducer = (state: DeckListState, action: DeckListAction): DeckListState => {
  switch (action.type) {
    case SET_DECK_ID:
      return {
        ...state,
        selectedDeckId: action.deckId as string,
      };

    default:
      return state;
  }
};
