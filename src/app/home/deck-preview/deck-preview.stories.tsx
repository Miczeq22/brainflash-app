import React from 'react';
import { DeckPreview } from './deck-preview.component';

export default {
  title: 'Deck Preview',
  component: DeckPreview,
};

export const Default = () => (
  <DeckPreview
    description="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis vulputate risus, molestie dapibus neque. Mauris vel sapien ac leo suscipit varius at et velit. Donec sed dapibus nulla. Fusce imperdiet cursus sem ut tempus. Aliquam rutrum purus eu fermentum suscipit. Pellentesque eu condimentum metus, non mattis turpis. Sed ipsum urna, pellentesque in nisl at, vulputate feugiat mi. Nulla commodo tellus id nunc auctor rutrum. Fusce nec enim ut lacus ultricies commodo eget quis risus. Sed finibus lacus vel ipsum rhoncus facilisis. Mauris lectus mauris, faucibus a dapibus eu, malesuada eu urna. Fusce nunc eros, tristique eget eleifend ut, consectetur at libero."
    title="Basics of object oriented programming"
    imageUrl="https://images.unsplash.com/photo-1593642634627-6fdaf35209f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    id="1"
    numberOfRatings={12345}
    rating={4.4}
  />
);
