import { ApiAction } from 'src/types';

interface CreateCardPayload {
  deckId: string;
  question: string;
  answer: string;
}

export const createCardAction = (payload: CreateCardPayload): ApiAction<{ error?: string }> => ({
  method: 'POST',
  endpoint: `${process.env.REACT_APP_API_ENDPOINT}/decks/add-card`,
  body: payload,
});
