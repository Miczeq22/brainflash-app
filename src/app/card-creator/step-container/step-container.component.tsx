import { IssuesCloseOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { setCardCreatorStep } from '@context/card-creator/card-creator.action-creators';
import { useCardCreatorState } from '@hooks/use-card-creator-state/use-card-creator-state.hook';
import { Steps } from 'antd';
import React from 'react';
import { SectionDescription, SectionTitle, StyledContainer } from './step-container.styles';

export const StepContainer = () => {
  const {
    state: { step },
    dispatch,
  } = useCardCreatorState();

  const handleStepChange = (currentStep: number) => {
    dispatch(setCardCreatorStep(currentStep));
  };

  return (
    <StyledContainer>
      <SectionTitle>Card creator wizard</SectionTitle>
      <SectionDescription>
        To create card for a deck please finish all of the steps.
      </SectionDescription>
      <Steps current={step} onChange={handleStepChange}>
        <Steps.Step key={0} title="Add card question" icon={<QuestionCircleOutlined />} />
        <Steps.Step key={1} title="Add card answer" icon={<IssuesCloseOutlined />} />
      </Steps>
    </StyledContainer>
  );
};
