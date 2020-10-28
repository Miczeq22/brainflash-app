export interface DeckDetailsState {
  isEditNameMode: boolean;
  isEditDescriptionMode: boolean;
  shouldReloadData: boolean;
  isEditImageUrlMode: boolean;
}

export interface DeckDetailsAction {
  type: string;
  isEditNameMode?: boolean;
  isEditDescriptionMode?: boolean;
  isEditImageUrlMode?: boolean;
}

export const SET_EDIT_NAME_MODE = 'deck-details/set-edit-name-mode';
export const SET_EDIT_DESCRIPTION_MODE = 'deck-details/set-description-mode';
export const SET_EDIT_IMAGE_URL_MODE = 'deck-details/set-image-url-mode';
export const RELOAD_DATA = 'deck-details/reload-data';
export const SET_DECK_TO_RELOAD = 'deck-details/set-deck-to-reload';

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

    case SET_EDIT_IMAGE_URL_MODE:
      return {
        ...state,
        isEditImageUrlMode: action.isEditImageUrlMode as boolean,
        shouldReloadData: true,
      };

    case RELOAD_DATA:
      return {
        ...state,
        shouldReloadData: false,
      };

    case SET_DECK_TO_RELOAD:
      return {
        ...state,
        shouldReloadData: true,
      };

    default:
      return state;
  }
};
