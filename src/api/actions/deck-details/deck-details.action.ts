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
  imageUrl?: string;
}

export const updateDeckMetadata = (
  payload: UpdateDeckMetadataPayload,
): ApiAction<{ error?: string }> => ({
  method: 'PATCH',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks/update-metadata`,
  body: payload,
});

interface DeleteDeckImagePayload {
  deckId: string;
}

export const deleteDeckImage = (
  payload: DeleteDeckImagePayload,
): ApiAction<{ error?: string }> => ({
  method: 'DELETE',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks/delete-image`,
  body: payload,
});
