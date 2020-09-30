import React from 'react';
import { DeckListItem } from '../deck-list-item/deck-list-item.component';
import { EmptyListText, StyledList } from './deck-list.styles';

interface DeckInList {
  id: string;
  title: string;
  rating: number;
  numberOfRatings: number;
  imgUrl?: string;
}

interface DeckListProps {
  decks: DeckInList[];
}

export const DeckList = ({ decks }: DeckListProps) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const handleDeckClick = (id: string) => {
    setActiveId(id);
  };

  return (
    <StyledList>
      {decks.length ? (
        decks.map((deck) => (
          <DeckListItem
            {...deck}
            onClick={handleDeckClick}
            active={deck.id === activeId}
            key={deck.id}
          />
        ))
      ) : (
        <EmptyListText>There are no decks...</EmptyListText>
      )}
    </StyledList>
  );
};
