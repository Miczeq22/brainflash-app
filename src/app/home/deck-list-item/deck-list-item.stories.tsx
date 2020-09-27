import React from 'react';
import { action } from '@storybook/addon-actions';
import { DeckListItem } from './deck-list-item.component';

export default {
  title: 'Deck List Item',
  component: DeckListItem,
  argTypes: {
    active: {
      type: 'boolean',
    },
  },
};

export const Default = (args) => (
  <DeckListItem
    id="1"
    numberOfRatings={9321}
    rating={4.3}
    onClick={action}
    title="Basics of object oriented programming"
    active
    {...args}
  />
);

Default.args = {
  active: false,
};
