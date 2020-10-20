import React from 'react';
import { DeckListItem } from '../deck-list-item/deck-list-item.component';
import { NoDecks } from '../no-decks/no-decks.component';
import { StyledList } from './deck-list.styles';

interface DeckInList {
  id: string;
  name: string;
  rating: number;
  numberOfRatings: number;
  thumbnailUrl?: string;
}

interface DeckListProps {
  decks: DeckInList[];
}

export const DeckList = ({ decks }: DeckListProps) => (
  <StyledList>
    {decks.length ? decks.map((deck) => <DeckListItem {...deck} key={deck.id} />) : <NoDecks />}
  </StyledList>
);
