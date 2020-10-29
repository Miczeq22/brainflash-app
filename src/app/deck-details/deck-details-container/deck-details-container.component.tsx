/* eslint-disable no-nested-ternary */
import React from 'react';
import { GetDeckdetailsData } from '@graphql/queries/get-deck-details.query';
import { Button, Dropdown, Menu, message, Modal } from 'antd';
import { CalendarTwoTone, CheckCircleTwoTone, MoreOutlined } from '@ant-design/icons';
import {
  ActionsContainer,
  ButtonsContainer,
  Description,
  DescriptionContainer,
  DescriptionTitle,
  DropdownContainer,
  EditDescriptionButton,
  EditNameButton,
  RateContainer,
  StyledContainer,
  StyledHeader,
  StyledImage,
  StyledRate,
  StyledTitle,
} from './deck-details-container.styles';
import { EditName } from '../edit-name/edit-name.component';
import { useDeckDetailsState } from '@hooks/use-deck-details-state/use-deck-details-state.hook';
import {
  setDeckDescriptionEditMode,
  setDeckImageUrlEditMode,
  setDeckNameEditMode,
  setDeckToReload,
} from '@context/deck-details/deck-details.action-creators';
import { EditDescription } from '../edit-description/edit-description.component';
import { EditImage } from '../edit-image/edit-image.component';
import { useMutation } from 'react-fetching-library';
import {
  deleteDeckImage,
  publishDeck,
  unpublishDeck,
} from '@api/actions/deck-details/deck-details.action';
import { useHistory } from 'react-router-dom';

interface DeckDetailsContainerProps extends GetDeckdetailsData {}

export const DeckDetailsContainer = ({
  id,
  name,
  description,
  rating,
  numberOfRatings,
  imageUrl,
  published,
  isDeckOwner,
}: DeckDetailsContainerProps) => {
  const {
    state: { isEditNameMode, isEditDescriptionMode },
    dispatch,
  } = useDeckDetailsState();

  const history = useHistory();

  const { mutate: deleteImage } = useMutation(deleteDeckImage);
  const { mutate: publish, loading: publishingDeck } = useMutation(publishDeck);
  const { mutate: unpublish, loading: unpublishingDeck } = useMutation(unpublishDeck);

  const handlePublish = async () => {
    const { error, payload: response } = await publish({
      deckId: id,
    });

    if (error) {
      message.error(response?.error);
    } else {
      message.success('Deck published successfully.');
      dispatch(setDeckToReload());
    }
  };

  const handleUnpublish = async () => {
    const { error, payload: response } = await unpublish({
      deckId: id,
    });

    if (error) {
      message.error(response?.error);
    } else {
      message.success('Deck unpublished successfully.');
      dispatch(setDeckToReload());
    }
  };

  const handleCreateCardAction = () => {
    history.push(`/deck/${id}/add-card`);
  };

  const menu = (
    <Menu>
      <Menu.Item key="add-card" onClick={handleCreateCardAction}>
        Add new card
      </Menu.Item>
      <Menu.Item key="show-cards" disabled>
        Show deck cards
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="publish/unpublish"
        disabled={publishingDeck || unpublishingDeck}
        onClick={published ? handleUnpublish : handlePublish}
      >
        {published ? 'Unpublish' : 'Publish'}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );

  const deleteExistingImage = async () => {
    await deleteImage({
      deckId: id,
    });

    message.success('Image deleted successfully');

    dispatch(setDeckImageUrlEditMode(false));
  };

  const handleEditName = () => dispatch(setDeckNameEditMode(true));

  const handleEditDescription = () => dispatch(setDeckDescriptionEditMode(true));

  const handleEditImageUrl = () => {
    Modal.confirm({
      title: 'Updating deck image',
      content: 'Do you want to delete existing image and upload new one?',
      onOk: () => deleteExistingImage(),
      okText: 'Yes, upload new image',
      cancelText: 'Keep existing image',
      width: '40%',
      centered: true,
      autoFocusButton: 'cancel',
    });
  };

  return (
    <StyledContainer>
      <StyledHeader>
        {imageUrl ? (
          <StyledImage imageUrl={imageUrl}>
            {isDeckOwner && (
              <Button type="dashed" onClick={handleEditImageUrl}>
                Edit deck image
              </Button>
            )}
          </StyledImage>
        ) : isDeckOwner ? (
          <EditImage deckId={id} />
        ) : (
          <StyledImage />
        )}
        <ActionsContainer>
          {isDeckOwner && (
            <DropdownContainer>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button>
                  <MoreOutlined />
                </Button>
              </Dropdown>
            </DropdownContainer>
          )}
          {isEditNameMode ? (
            <EditName actualName={name} deckId={id} />
          ) : (
            <StyledTitle>
              {name}
              {isDeckOwner && (
                <EditNameButton type="link" onClick={handleEditName}>
                  Edit name
                </EditNameButton>
              )}
            </StyledTitle>
          )}
          <RateContainer>
            <StyledRate defaultValue={rating} disabled allowHalf />
            <span className="rating">{rating.toFixed(2)}</span>
            <span>{numberOfRatings} ratings</span>
          </RateContainer>
          <ButtonsContainer>
            <Button type="primary" icon={<CheckCircleTwoTone />}>
              Enroll Now!
            </Button>
            <Button icon={<CalendarTwoTone />}>Schedule for later</Button>
          </ButtonsContainer>
        </ActionsContainer>
      </StyledHeader>
      <DescriptionContainer>
        {isEditDescriptionMode ? (
          <EditDescription actualDescription={description} deckId={id} />
        ) : (
          <>
            <DescriptionTitle>
              Description
              {isDeckOwner && (
                <EditDescriptionButton type="link" onClick={handleEditDescription}>
                  Edit description
                </EditDescriptionButton>
              )}
            </DescriptionTitle>
            <Description>{description}</Description>
          </>
        )}
      </DescriptionContainer>
    </StyledContainer>
  );
};
