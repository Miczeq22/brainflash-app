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
