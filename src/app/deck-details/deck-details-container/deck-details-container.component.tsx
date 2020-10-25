import React from 'react';
import { GetDeckdetailsData } from '@graphql/queries/get-deck-details.query';
import { Ratings } from '@ui/ratings/ratings.component';
import { Button, Dropdown, Menu } from 'antd';
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
  StyledContainer,
  StyledHeader,
  StyledImage,
  StyledTitle,
} from './deck-details-container.styles';
import { EditName } from '../edit-name/edit-name.component';
import { useDeckDetailsState } from '@hooks/use-deck-details-state/use-deck-details-state.hook';
import {
  setDeckDescriptionEditMode,
  setDeckNameEditMode,
} from '@context/deck-details/deck-details.action-creators';
import { EditDescription } from '../edit-description/edit-description.component';

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

  const menu = (
    <Menu>
      <Menu.Item key="add-card">Add new card</Menu.Item>
      <Menu.Item key="add-card">Show cards</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="publish/unpublish">{published ? 'Unpublish' : 'Publish'}</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );

  const handleEditName = () => dispatch(setDeckNameEditMode(true));

  const handleEditDescription = () => dispatch(setDeckDescriptionEditMode(true));

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledImage imageUrl={imageUrl} />
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
          <Ratings ratings={rating} numberOfRatings={numberOfRatings} />
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
              <EditDescriptionButton type="link" onClick={handleEditDescription}>
                Edit description
              </EditDescriptionButton>
            </DescriptionTitle>
            <Description>{description}</Description>
          </>
        )}
      </DescriptionContainer>
    </StyledContainer>
  );
};
