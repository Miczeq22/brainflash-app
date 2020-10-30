import { useQuery } from '@apollo/client';
import { useCardCreatorState } from '@hooks/use-card-creator-state/use-card-creator-state.hook';
import React from 'react';
import { useSpring } from 'react-spring';
import { GET_DECK_FOR_CARD } from '@graphql/queries/get-deck-for-card.query';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
  setCardCreatorAnswer,
  setCardCreatorQuestion,
  setCardCreatorStep,
} from '@context/card-creator/card-creator.action-creators';
import {
  CardBack,
  CardContainer,
  CardFront,
  DeckTitle,
  FrontContent,
  NextButton,
  PreviousButton,
  QuestionNumber,
  QuestionText,
} from './card.styles';
import { message, Spin } from 'antd';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useMutation } from 'react-fetching-library';
import { createCardAction } from '@api/actions/card-creator/card-creator.action';

interface CardProps {
  deckId: string;
}

export const Card = ({ deckId }: CardProps) => {
  const {
    state: { step, question, answer },
    dispatch,
  } = useCardCreatorState();

  const { mutate: createCard } = useMutation(createCardAction);

  const isFlipped = React.useMemo(() => step === 1, [step]);

  const questionRef = React.createRef<HTMLDivElement>();

  const { data, loading } = useQuery(GET_DECK_FOR_CARD, {
    variables: {
      deckID: deckId,
    },
  });

  const { opacity, transform } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleClick = () => {
    if (step !== 0) {
      return;
    }

    questionRef.current?.focus();

    if (questionRef.current?.textContent === 'Provide card question...') {
      questionRef.current.textContent = '';
    } else {
      document.execCommand('selectAll', false, undefined);
      document.getSelection()?.collapseToEnd();
    }
  };

  const handleQuestionKeyPress = (event: React.KeyboardEvent<HTMLParagraphElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const handleQuestionChange = (event: React.FormEvent<HTMLParagraphElement>) => {
    dispatch(setCardCreatorQuestion(event.currentTarget.textContent as string));
  };

  const handleNextClick = () => dispatch(setCardCreatorStep(1));

  const handlePreviousClick = () => dispatch(setCardCreatorStep(0));

  const handleAnswerChange = (value: string) => {
    dispatch(setCardCreatorAnswer(value));
  };

  const handleAddCard = async () => {
    const { error, payload: response } = await createCard({
      deckId,
      question,
      answer,
    });

    if (error) {
      message.error(response?.error);
    } else {
      message.success('Card added successfully.');
    }
  };

  return (
    <CardContainer onClick={handleClick}>
      <Spin spinning={loading} tip="Fetching deck data...">
        <PreviousButton
          icon={<LeftOutlined />}
          htmlType="button"
          disabled={step === 0}
          onClick={handlePreviousClick}
        />
        <>
          <CardFront style={{ opacity: opacity.interpolate((o) => 1 - (o as number)), transform }}>
            {!loading && (
              <>
                <FrontContent>
                  <DeckTitle>{data.getDeck.name}</DeckTitle>
                  <QuestionText
                    contentEditable
                    ref={questionRef}
                    onKeyPress={handleQuestionKeyPress}
                    onInput={handleQuestionChange}
                  />
                </FrontContent>
                <QuestionNumber>{data.getDeck.cardCount + 1}</QuestionNumber>
              </>
            )}
          </CardFront>
          <CardBack
            style={{ opacity, transform: transform.interpolate((t) => `${t} rotateY(180deg)`) }}
          >
            <SimpleMDE onChange={handleAnswerChange} />
          </CardBack>
          <NextButton
            icon={<RightOutlined />}
            htmlType="button"
            disabled={step === 0 ? question.trim().length < 3 : answer.trim().length < 3}
            onClick={step === 1 ? handleAddCard : handleNextClick}
          />
        </>
      </Spin>
    </CardContainer>
  );
};
