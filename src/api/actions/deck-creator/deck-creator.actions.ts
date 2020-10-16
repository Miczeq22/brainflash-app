import { ApiAction } from 'src/types';

export interface UploadImagePayload {
  data: FormData;
}

export interface UploadImageResponse {
  fileName: string;
  fileLocation: string;
}

export interface CreateDeckActionPayload {
  name: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export interface CreateDeckActionResponse {
  deckId?: string;
  error?: string;
}

export const uploadFileAction = (payload: UploadImagePayload): ApiAction<UploadImageResponse> => ({
  method: 'POST',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks/upload-image`,
  body: payload.data,
});

export const createDeckAction = (
  payload: CreateDeckActionPayload,
): ApiAction<CreateDeckActionResponse> => ({
  method: 'POST',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks`,
  body: payload,
});
