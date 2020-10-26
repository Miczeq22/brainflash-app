import {
  DeckDetailsAction,
  RELOAD_DATA,
  SET_EDIT_DESCRIPTION_MODE,
  SET_EDIT_NAME_MODE,
} from './deck-details.reducer';

export const setDeckNameEditMode = (isEditNameMode: boolean): DeckDetailsAction => ({
  type: SET_EDIT_NAME_MODE,
  isEditNameMode,
});

export const setDeckDescriptionEditMode = (isEditDescriptionMode: boolean): DeckDetailsAction => ({
  type: SET_EDIT_DESCRIPTION_MODE,
  isEditDescriptionMode,
});

export const reloadDeckDetailsData = (): DeckDetailsAction => ({
  type: RELOAD_DATA,
});
