import {
  DeckCreatorAction,
  SET_DESCRIPTION,
  SET_IMAGE_DATA,
  SET_NAME,
  SET_READY_TO_SUBMIT,
  SET_STEP,
  SET_TAGS,
  START_UPLOADING_IMAGE,
  STOP_UPLOADING_IMAGE,
} from './deck-creator.reducer';

export const setDeckImageData: (
  imageUrl: string | null,
  imageName: string | null,
) => DeckCreatorAction = (imageUrl, imageName) => ({
  type: SET_IMAGE_DATA,
  imageUrl,
  imageName,
});

export const startUploadingDeckImage: () => DeckCreatorAction = () => ({
  type: START_UPLOADING_IMAGE,
});

export const stopUploadingDeckImage: () => DeckCreatorAction = () => ({
  type: STOP_UPLOADING_IMAGE,
});

export const setDeckName: (name: string) => DeckCreatorAction = (name) => ({
  type: SET_NAME,
  name,
});

export const setDeckDescription: (description: string) => DeckCreatorAction = (description) => ({
  type: SET_DESCRIPTION,
  description,
});

export const setDeckCreatorStep: (step: number) => DeckCreatorAction = (step) => ({
  type: SET_STEP,
  step,
});

export const setDeckTags: (tags: string[]) => DeckCreatorAction = (tags) => ({
  type: SET_TAGS,
  tags,
});

export const setDeckReadyToSubmit: (isReadyToSubmit: boolean) => DeckCreatorAction = (
  isReadyToSubmit,
) => ({
  type: SET_READY_TO_SUBMIT,
  isReadyToSubmit,
});
