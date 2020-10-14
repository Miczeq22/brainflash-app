export interface DeckCreatorState {
  imageUrl: string | null;
  uploadingImage: boolean;
  imageStepDone: boolean;
  name: string;
  description: string;
  tags: string[];
}

export interface DeckCreatorAction {
  type: string;
  imageStepDone?: boolean;
  imageUrl?: string | null;
  name?: string;
  description?: string;
  tags?: string[];
}

export const SET_IMAGE_URL = 'deck-creator/set-image-url';
export const START_UPLOADING_IMAGE = 'deck-creator/start-uploading-image';
export const STOP_UPLOADING_IMAGE = 'deck-creator/stop-uploading-image';
export const SET_IMAGE_STEP_DONE = 'deck-creator/set-image-step-done';
export const SET_NAME = 'deck-creator/set-name';
export const SET_DESCRIPTION = 'deck-creator/set-description';

export const deckCreatorReducer = (
  state: DeckCreatorState,
  action: DeckCreatorAction,
): DeckCreatorState => {
  switch (action.type) {
    case SET_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.imageUrl as string,
      };

    case START_UPLOADING_IMAGE:
      return {
        ...state,
        uploadingImage: true,
      };

    case STOP_UPLOADING_IMAGE:
      return {
        ...state,
        uploadingImage: false,
      };

    case SET_IMAGE_STEP_DONE:
      return {
        ...state,
        imageStepDone: action.imageStepDone as boolean,
      };

    case SET_NAME:
      return {
        ...state,
        name: action.name as string,
      };

    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.description as string,
      };

    default:
      return state;
  }
};