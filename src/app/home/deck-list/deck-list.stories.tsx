import React from 'react';
import { DeckList } from './deck-list.component';

export default {
  title: 'Deck List',
  component: DeckList,
};

export const Default = () => (
  <DeckList
    decks={[
      {
        id: '1',
        numberOfRatings: 9500,
        rating: 3.91,
        title: 'Basics of Object oriented programming',
        imgUrl:
          'https://images.unsplash.com/photo-1593642634627-6fdaf35209f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      },
      {
        id: '2',
        numberOfRatings: 130,
        rating: 3.42,
        title: 'JavaScript ES6',
        imgUrl:
          'https://images.unsplash.com/photo-1601333144314-e7884b3d63eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        id: '3',
        numberOfRatings: 13220,
        rating: 4.44,
        title: 'Security in IT',
        imgUrl:
          'https://images.unsplash.com/photo-1601293058843-f34e8dd9ccfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      },
      {
        id: '4',
        numberOfRatings: 13220,
        rating: 4.7,
        title: 'Pragmatic Thinking',
        imgUrl:
          'https://images.unsplash.com/photo-1601367041697-4d881519d545?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        id: '4',
        numberOfRatings: 1320,
        rating: 1.7,
        title: 'No Image Provided',
      },
    ]}
  />
);

export const EmptyList = () => <DeckList decks={[]} />;
