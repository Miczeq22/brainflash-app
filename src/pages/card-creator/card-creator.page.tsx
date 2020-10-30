import { Card } from '@app/card-creator/card/card.component';
import { StepContainer } from '@app/card-creator/step-container/step-container.component';
import { Logo } from '@ui/logo/logo.component';
import { Topbar } from '@ui/topbar/topbar.component';
import React from 'react';
import { useParams } from 'react-router-dom';
import { BodyContainer, CardContainer, Header, PageContainer } from './card-creator.styles';

export const CardCreatorPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageContainer>
      <Header>
        <Logo />
        <Topbar />
      </Header>
      <BodyContainer>
        <StepContainer />
        <CardContainer>
          <Card deckId={id} />
        </CardContainer>
      </BodyContainer>
    </PageContainer>
  );
};
