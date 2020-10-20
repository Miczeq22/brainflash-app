import { Logo } from '@ui/logo/logo.component';
import { Topbar } from '@ui/topbar/topbar.component';
import React from 'react';
import { StepContainer } from '@app/deck-creator/step-container/step-container.component';
import { ImageUploaderComponent } from '@app/deck-creator/image-uploader/image-uploader.component';
import { Button, message } from 'antd';
import { CoffeeOutlined } from '@ant-design/icons';
import { useDeckCreatorState } from '@hooks/use-deck-creator-state/use-deck-creator-state.hook';
import {
  ActionContainer,
  BodyContainer,
  Header,
  PageContainer,
  UploadImageContainer,
} from './deck-creator.styles';
import {
  setDeckCreatorStep,
  setDeckReadyToSubmit,
} from '@context/deck-creator/deck-creator.action-creators';
import { TitleAndDescriptionForm } from '@app/deck-creator/title-and-description-form/title-and-description-form.component';
import { DeckTags } from '@app/deck-tags/deck-tags.component';
import { useMutation } from 'react-fetching-library';
import { createDeckAction } from '@api/actions/deck-creator/deck-creator.actions';
import { useHistory } from 'react-router-dom';

export const DeckCreatorPage = () => {
  const {
    state: { step, imageUrl, imageName, uploadingImage, isReadyToSubmit, name, description, tags },
    dispatch,
  } = useDeckCreatorState();

  const history = useHistory();

  const { mutate } = useMutation(createDeckAction);

  const handleUploadLaterImage = () => {
    dispatch(setDeckCreatorStep(1));
  };

  React.useEffect(() => {
    if (!isReadyToSubmit) {
      return;
    }

    dispatch(setDeckReadyToSubmit(false));

    async function createDeck() {
      const { payload, error } = await mutate({
        name,
        description,
        tags,
        imageUrl: imageName ?? undefined,
      });

      if (error) {
        message.error(payload?.error as string);
      } else {
        message.success('Deck created successfully');
        history.push(`/deck-details/${payload?.deckId as string}`);
      }
    }

    createDeck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReadyToSubmit]);

  const renderStep = () => {
    switch (step) {
      default:
      case 0:
        return (
          <UploadImageContainer>
            <ImageUploaderComponent />
            {imageUrl === null && (
              <Button
                icon={<CoffeeOutlined />}
                onClick={handleUploadLaterImage}
                disabled={uploadingImage}
              >
                Add image later
              </Button>
            )}
          </UploadImageContainer>
        );

      case 1:
        return <TitleAndDescriptionForm />;

      case 2:
        return <DeckTags />;
    }
  };

  return (
    <PageContainer>
      <Header>
        <Logo />
        <Topbar />
      </Header>
      <BodyContainer>
        <StepContainer />
        <ActionContainer>{renderStep()}</ActionContainer>
      </BodyContainer>
    </PageContainer>
  );
};
