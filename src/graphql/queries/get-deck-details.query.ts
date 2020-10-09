import { gql } from '@apollo/client';
import { DeckData } from './get-decks.query';

export interface GetDeckdetailsData extends DeckData {
  isDeckOwner: boolean;
}

export const GET_DECK_DETAILS = gql`
  query($deckID: ID!) {
    getDeck(deckID: $deckID) {
      id
      name
      description
      tags
      deleted
      published
      imageUrl
      ownerName
      ownerId
      createdAt
      cardCount
      rating
      numberOfRatings
      isDeckOwner
    }
  }
`;
