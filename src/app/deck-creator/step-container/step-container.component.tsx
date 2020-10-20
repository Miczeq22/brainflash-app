import { EditOutlined, FileImageOutlined, TagsOutlined } from '@ant-design/icons';
import { setDeckCreatorStep } from '@context/deck-creator/deck-creator.action-creators';
import { useDeckCreatorState } from '@hooks/use-deck-creator-state/use-deck-creator-state.hook';
import { Steps } from 'antd';
import React from 'react';
import { SectionDescription, SectionTitle, StyledContainer } from './step-container.styles';

export const StepContainer = () => {
  const {
    state: { step, name, description, tags },
    dispatch,
  } = useDeckCreatorState();

  const handleStepChange = (currentStep: number) => {
    dispatch(setDeckCreatorStep(currentStep));
  };

  return (
    <StyledContainer>
      <SectionTitle>Deck creator wizard</SectionTitle>
      <SectionDescription>
        To create a deck please finish all of the steps. The created deck will be private by
        default, but you can publish a deck anytime.
      </SectionDescription>
      <Steps current={step} onChange={handleStepChange}>
        <Steps.Step key={0} title="Upload deck image" icon={<FileImageOutlined />} />
        <Steps.Step
          key={1}
          title="Add deck name and description"
          icon={<EditOutlined />}
          disabled={!name.trim() || !description.trim()}
        />
        <Steps.Step key={2} title="Set deck tags" disabled={!tags.length} icon={<TagsOutlined />} />
      </Steps>
    </StyledContainer>
  );
};
