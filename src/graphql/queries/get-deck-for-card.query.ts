import { gql } from '@apollo/client';

export interface GetDeckForCardData {
  name: string;
  cardCount: number;
}

export const GET_DECK_FOR_CARD = gql`
  query($deckID: ID!) {
    getDeck(deckID: $deckID) {
      name
      cardCount
    }
  }
`;
