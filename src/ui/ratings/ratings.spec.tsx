import { ThemeProvider } from '@providers/theme.provider';
import { render } from '@testing-library/react';
import React from 'react';
import { Ratings } from './ratings.component';

describe('<Ratings /> Component', () => {
  test('should render without crashing', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Ratings ratings={4} numberOfRatings={123} />
      </ThemeProvider>,
    );

    const element = getByText(/123 ratings/);

    expect(element).toBeInTheDocument();
  });

  test('should properly format ratings', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Ratings ratings={3.3333} numberOfRatings={123} />
      </ThemeProvider>,
    );

    const element = getByText(/3.33/);

    expect(element).toBeInTheDocument();
  });

  test('should properly format number of ratings', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Ratings ratings={3.3333} numberOfRatings={99123} />
      </ThemeProvider>,
    );

    const element = getByText(/99,123 ratings/);

    expect(element).toBeInTheDocument();
  });
});
