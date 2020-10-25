import { ApiAction } from 'src/types';

export interface UpdateDeckNamePayload {
  newName: string;
  deckId: string;
}

export const updateDeckNameAction = (
  payload: UpdateDeckNamePayload,
): ApiAction<{ error?: string }> => ({
  method: 'PATCH',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks/update-name`,
  body: payload,
});

interface UpdateDeckMetadataPayload {
  deckId: string;
  description?: string;
  tags?: string[];
}

export const updateDeckMetadata = (
  payload: UpdateDeckMetadataPayload,
): ApiAction<{ error?: string }> => ({
  method: 'PATCH',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks/update-metadata`,
  body: payload,
});
