import {
  CardCreatorContext,
  CardCreatorStateApi,
} from '@context/card-creator/card-creator.context';
import React from 'react';

export const useCardCreatorState = (): CardCreatorStateApi => {
  const context = React.useContext(CardCreatorContext) as CardCreatorStateApi;

  if (!context || !context.dispatch) {
    throw new Error('useCardCreatorState must be used within an CardCreatorProvider.');
  }

  return context;
};
