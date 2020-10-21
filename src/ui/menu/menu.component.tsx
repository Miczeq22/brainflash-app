import { PlusOutlined } from '@ant-design/icons';
import { Logo } from '@ui/logo/logo.component';
import { Button } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@assets/menu-icon.svg';
import {
  ActionsContainer,
  ButtonContainer,
  MenuIcon,
  NavigationHeading,
  NavigationList,
  NavigationListItem,
  StyledNav,
} from './menu.styles';

export const Menu = () => {
  const path = useLocation();

  const isActiveRoute = (route: string) => path.pathname === route;

  return (
    <StyledNav>
      <ActionsContainer>
        <Logo />
        <ButtonContainer>
          <Link to="/deck-creator">
            <Button type="primary">
              Create new deck <PlusOutlined />
            </Button>
          </Link>
        </ButtonContainer>
        <NavigationHeading>Menu</NavigationHeading>
        <NavigationList>
          <NavigationListItem active={isActiveRoute('/')}>
            <Link to="/">Explore decks</Link>
          </NavigationListItem>
          <NavigationListItem active={isActiveRoute('/your-decks')}>
            <Link to="/your-decks">Your decks</Link>
          </NavigationListItem>
          <NavigationListItem active={isActiveRoute('/enrolled-decks')}>
            <Link to="/enrolled-decks">Enrolled decks</Link>
          </NavigationListItem>
        </NavigationList>
      </ActionsContainer>
      <MenuIcon alt="Menu" src={Icon} />
    </StyledNav>
  );
};
