import { gql } from '@apollo/client';

export interface CardData {
  id: string;
  deckId: string;
  question: string;
  answer: string;
  createdAt: string;
}

export interface DeckData {
  id: string;
  name: string;
  description: string;
  tags: string[];
  deleted: boolean;
  published: boolean;
  imageUrl: string;
  ownerName: string;
  ownerId: string;
  createdAt: string;
  cardCount: number;
  cards: CardData[];
  rating: number;
  numberOfRatings: number;
}

export interface GetDecksData {
  data: DeckData[];
}

export const GET_DECKS_QUERY = gql`
  query($page: Int, $limit: Int) {
    getAllDecks(page: $page, limit: $limit) {
      id
      name
      tags
      rating
      numberOfRatings
      thumbnailUrl
    }
  }
`;
