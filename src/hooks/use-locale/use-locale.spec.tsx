import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { useLocale } from './use-locale.hook';

describe('useLocale hook', () => {
  test('should throw an error if locale context is unavailable', () => {
    const { result } = renderHook(() => useLocale(), {
      wrapper: ({ children }: any) => (
        <IntlProvider onError={() => {}} locale="">
          {children}
        </IntlProvider>
      ),
    });

    expect(result.error).toEqual(
      Error('LocaleContext is unavailable, make sure you are using LocaleProvider context.'),
    );
  });
});
