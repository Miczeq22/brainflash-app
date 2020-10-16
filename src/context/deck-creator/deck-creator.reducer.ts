export interface DeckCreatorState {
  imageUrl: string | null;
  uploadingImage: boolean;
  name: string;
  description: string;
  tags: string[];
  step: number;
  isReadyToSubmit: boolean;
}

export interface DeckCreatorAction {
  type: string;
  imageUrl?: string | null;
  name?: string;
  description?: string;
  tags?: string[];
  step?: number;
  isReadyToSubmit?: boolean;
}

export const SET_IMAGE_URL = 'deck-creator/set-image-url';
export const START_UPLOADING_IMAGE = 'deck-creator/start-uploading-image';
export const STOP_UPLOADING_IMAGE = 'deck-creator/stop-uploading-image';
export const SET_NAME = 'deck-creator/set-name';
export const SET_DESCRIPTION = 'deck-creator/set-description';
export const SET_STEP = 'deck-creator/set-step';
export const SET_TAGS = 'deck-creator/set-tags';
export const SET_READY_TO_SUBMIT = 'deck-creator/set-ready-to-submit';

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

    case SET_STEP:
      return {
        ...state,
        step: action.step as number,
      };

    case SET_TAGS:
      return {
        ...state,
        tags: action.tags as string[],
      };

    case SET_READY_TO_SUBMIT:
      return {
        ...state,
        isReadyToSubmit: action.isReadyToSubmit as boolean,
      };

    default:
      return state;
  }
};
