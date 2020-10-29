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

interface PublishDeckPayload {
  deckId: string;
}

export const publishDeck = (payload: PublishDeckPayload): ApiAction<{ error?: string }> => ({
  method: 'PATCH',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks/publish`,
  body: payload,
});

interface UnpublishDeckPayload {
  deckId: string;
}

export const unpublishDeck = (payload: UnpublishDeckPayload): ApiAction<{ error?: string }> => ({
  method: 'PATCH',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks/unpublish`,
  body: payload,
});

interface AddDeckRatingPayload {
  deckId: string;
  rating: number;
}

export const addDeckRating = (payload: AddDeckRatingPayload): ApiAction<{ error?: string }> => ({
  method: 'PATCH',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks/add-rating`,
  body: payload,
});
