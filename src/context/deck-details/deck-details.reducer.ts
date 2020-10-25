export interface DeckDetailsState {
  isEditNameMode: boolean;
  shouldReloadData: boolean;
}

export interface DeckDetailsAction {
  type: string;
  isEditNameMode?: boolean;
}

export const SET_EDIT_MODE = 'deck-details/set-edit-mode';
export const RELOAD_DATA = 'deck-details/reload-data';

export const deckDetailsReducer = (
  state: DeckDetailsState,
  action: DeckDetailsAction,
): DeckDetailsState => {
  switch (action.type) {
    case SET_EDIT_MODE:
      return {
        ...state,
        isEditNameMode: action.isEditNameMode as boolean,
        shouldReloadData: true,
      };

    case RELOAD_DATA:
      return {
        ...state,
        shouldReloadData: false,
      };

    default:
      return state;
  }
};
