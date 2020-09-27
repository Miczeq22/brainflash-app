import { Ratings } from '@ui/ratings/ratings.component';
import React from 'react';
import {
  DeckDefaultImage,
  DeckImage,
  DescriptionContainer,
  RatingsContainer,
  StyledButton,
  StyledListItem,
  StyledTitle,
} from './deck-list-item.styles';

interface DeckListItemProps {
  id: string;
  title: string;
  rating: number;
  numberOfRatings: number;
  imgUrl?: string;
  onClick: (id: string) => void;
  active?: boolean;
}

export const DeckListItem = ({
  id,
  title,
  rating,
  numberOfRatings,
  onClick,
  active = false,
  imgUrl,
}: DeckListItemProps) => {
  const handleClick = () => onClick(id);

  return (
    <StyledListItem active={active}>
      <StyledButton onClick={handleClick}>
        {imgUrl ? <DeckImage alt="Deck cover" src={imgUrl} /> : <DeckDefaultImage />}
        <DescriptionContainer>
          <StyledTitle>{title}</StyledTitle>
          <RatingsContainer>
            <Ratings ratings={rating} numberOfRatings={numberOfRatings} />
          </RatingsContainer>
        </DescriptionContainer>
      </StyledButton>
    </StyledListItem>
  );
};
