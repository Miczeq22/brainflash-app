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
    name="Basics of object oriented programming"
    active
    imgUrl="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    {...args}
  />
);

Default.args = {
  active: false,
};
