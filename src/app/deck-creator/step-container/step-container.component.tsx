import { EditOutlined, FileImageOutlined, TagsOutlined } from '@ant-design/icons';
import { setDeckCreatorStep } from '@context/deck-creator/deck-creator.action-creators';
import { useDeckCreatorState } from '@hooks/use-deck-creator-state/use-deck-creator-state.hook';
import { Steps } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ececec;
`;

const SectionTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.color.fontPrimary};
`;

const SectionDescription = styled.p`
  font-size: 18px;
  max-width: 55%;
  line-height: 30px;
  margin: 15px 0 30px;
  color: ${({ theme }) => theme.color.fontPrimary};
  font-weight: 300;
`;

export const StepContainer = () => {
  const {
    state: { step },
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
          disabled
        />
        <Steps.Step key={2} title="Set deck tags" disabled icon={<TagsOutlined />} />
      </Steps>
    </StyledContainer>
  );
};
