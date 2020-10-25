import { DeckDetailsAction, RELOAD_DATA, SET_EDIT_MODE } from './deck-details.reducer';

export const setDeckNameEditMode = (isEditNameMode: boolean): DeckDetailsAction => ({
  type: SET_EDIT_MODE,
  isEditNameMode,
});

export const reloadDeckDetailsData = (): DeckDetailsAction => ({
  type: RELOAD_DATA,
});
