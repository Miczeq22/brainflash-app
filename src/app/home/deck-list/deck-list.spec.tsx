import { AppProvider } from '@providers/app.provider';
import { render } from '@testing-library/react';
import React from 'react';
import { DeckList } from './deck-list.component';

describe('<DeckList /> Component', () => {
  test('should render without crashing', () => {
    const { container } = render(
      <AppProvider>
        <DeckList decks={[]} />
      </AppProvider>,
    );

    const ul = container.querySelector('ul');

    expect(ul).toBeInTheDocument();
  });

  test('should render proper text if list is empty', () => {
    const { getByText } = render(
      <AppProvider>
        <DeckList decks={[]} />
      </AppProvider>,
    );

    const text = getByText(/There are no decks.../);

    expect(text).toBeInTheDocument();
  });

  test('should render proper amount of items', () => {
    const { container } = render(
      <AppProvider>
        <DeckList
          decks={[
            {
              id: '1',
              numberOfRatings: 9500,
              rating: 3.91,
              name: 'Basics of Object oriented programming',
            },
            {
              id: '2',
              numberOfRatings: 130,
              rating: 3.42,
              name: 'JavaScript ES6',
            },
            {
              id: '3',
              numberOfRatings: 13220,
              rating: 4.44,
              name: 'Security in IT',
            },
            {
              id: '4',
              numberOfRatings: 13220,
              rating: 4.7,
              name: 'Pragmatic Thinking',
            },
          ]}
        />
      </AppProvider>,
    );

    const liElements = container.querySelectorAll('h3');

    expect(liElements.length).toEqual(4);
  });
});
