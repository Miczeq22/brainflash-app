export interface DeckDetailsState {
  isEditNameMode: boolean;
  isEditDescriptionMode: boolean;
  shouldReloadData: boolean;
}

export interface DeckDetailsAction {
  type: string;
  isEditNameMode?: boolean;
  isEditDescriptionMode?: boolean;
}

export const SET_EDIT_NAME_MODE = 'deck-details/set-edit-name-mode';
export const SET_EDIT_DESCRIPTION_MODE = 'deck-details/set-description-mode';
export const RELOAD_DATA = 'deck-details/reload-data';

export const deckDetailsReducer = (
  state: DeckDetailsState,
  action: DeckDetailsAction,
): DeckDetailsState => {
  switch (action.type) {
    case SET_EDIT_NAME_MODE:
      return {
        ...state,
        isEditNameMode: action.isEditNameMode as boolean,
        shouldReloadData: true,
      };

    case SET_EDIT_DESCRIPTION_MODE:
      return {
        ...state,
        isEditDescriptionMode: action.isEditDescriptionMode as boolean,
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
