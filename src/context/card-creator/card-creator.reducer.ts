export interface CardCreatorState {
  step: number;
  question: string;
  answer: string;
}

export interface CardCreatorAction {
  type: string;
  step?: number;
  question?: string;
  answer?: string;
}

export const SET_STEP = 'deck-creator/set-step';
export const SET_QUESTION = 'deck-creator/set-question';
export const SET_ANSWER = 'deck-creator/set-answer';

export const cardCreatorReducer = (
  state: CardCreatorState,
  action: CardCreatorAction,
): CardCreatorState => {
  switch (action.type) {
    case SET_STEP:
      return {
        ...state,
        step: action.step as number,
      };

    case SET_QUESTION:
      return {
        ...state,
        question: action.question as string,
      };

    case SET_ANSWER:
      return {
        ...state,
        answer: action.answer as string,
      };

    default:
      return state;
  }
};
