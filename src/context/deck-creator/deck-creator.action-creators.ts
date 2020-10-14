import {
  DeckCreatorAction,
  SET_DESCRIPTION,
  SET_IMAGE_STEP_DONE,
  SET_IMAGE_URL,
  SET_NAME,
  START_UPLOADING_IMAGE,
  STOP_UPLOADING_IMAGE,
} from './deck-creator.reducer';

export const setDeckImageUrl: (imageUrl: string | null) => DeckCreatorAction = (imageUrl) => ({
  type: SET_IMAGE_URL,
  imageUrl,
});

export const startUploadingDeckImage: () => DeckCreatorAction = () => ({
  type: START_UPLOADING_IMAGE,
});

export const stopUploadingDeckImage: () => DeckCreatorAction = () => ({
  type: STOP_UPLOADING_IMAGE,
});

export const setDeckImageStepDone: (imageStepDone: boolean) => DeckCreatorAction = (
  imageStepDone,
) => ({
  type: SET_IMAGE_STEP_DONE,
  imageStepDone,
});

export const setDeckName: (name: string) => DeckCreatorAction = (name) => ({
  type: SET_NAME,
  name,
});

export const setDeckDescription: (description: string) => DeckCreatorAction = (description) => ({
  type: SET_DESCRIPTION,
  description,
});
