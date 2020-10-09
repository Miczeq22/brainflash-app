import React from 'react';
import { DeckListItem } from '../deck-list-item/deck-list-item.component';
import { EmptyListText, StyledList } from './deck-list.styles';

interface DeckInList {
  id: string;
  name: string;
  rating: number;
  numberOfRatings: number;
  imageUrl?: string;
}

interface DeckListProps {
  decks: DeckInList[];
}

export const DeckList = ({ decks }: DeckListProps) => (
  <StyledList>
    {decks.length ? (
      decks.map((deck) => <DeckListItem {...deck} key={deck.id} />)
    ) : (
      <EmptyListText>There are no decks...</EmptyListText>
    )}
  </StyledList>
);
