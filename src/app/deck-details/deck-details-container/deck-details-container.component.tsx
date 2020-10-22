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
  StyledContainer,
  StyledHeader,
  StyledImage,
  StyledTitle,
} from './deck-details-container.styles';

interface DeckDetailsContainerProps extends GetDeckdetailsData {}

export const DeckDetailsContainer = ({
  name,
  description,
  rating,
  numberOfRatings,
  imageUrl,
  published,
  isDeckOwner,
}: DeckDetailsContainerProps) => {
  const menu = (
    <Menu>
      <Menu.Item key="publish/unpublish">{published ? 'Unpublish' : 'Publish'}</Menu.Item>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );

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
          <StyledTitle>{name}</StyledTitle>
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
        <DescriptionTitle>Description</DescriptionTitle>
        <Description>{description}</Description>
      </DescriptionContainer>
    </StyledContainer>
  );
};
