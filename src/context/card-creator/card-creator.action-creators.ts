import { CardCreatorAction, SET_ANSWER, SET_QUESTION, SET_STEP } from './card-creator.reducer';

export const setCardCreatorStep = (step: number): CardCreatorAction => ({
  type: SET_STEP,
  step,
});

export const steCardCreatorQuestion = (question: string): CardCreatorAction => ({
  type: SET_QUESTION,
  question,
});

export const setCardCreatorAnswer = (answer: string): CardCreatorAction => ({
  type: SET_ANSWER,
  answer,
});
