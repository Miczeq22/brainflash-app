import { DeckListContext, initialDeckListState } from '@context/deck-list/deck-list.context';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useDeckListState } from './use-deck-list-state.hook';

describe('useDeckList', () => {
  const dispatch = jest.fn();

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <DeckListContext.Provider value={{ dispatch, state: initialDeckListState }}>
      {children}
    </DeckListContext.Provider>
  );

  test('should render context', () => {
    const { result } = renderHook(() => useDeckListState(), { wrapper });

    expect(result.current).toEqual({
      state: initialDeckListState,
      dispatch,
    });
  });

  test('should throw an error when hook is used outside DeckListContext Provider', () => {
    const { result } = renderHook(() => useDeckListState());

    expect(result.error).toEqual(Error('useDeckList must be used within DeckListProvider.'));
  });
});
