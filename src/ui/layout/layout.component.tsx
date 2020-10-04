import { Menu } from '@ui/menu/menu.component';
import { Topbar } from '@ui/topbar/topbar.component';
import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.main`
  display: flex;
  width: 100%;
`;

const ContentContainer = styled.section`
  flex: 1;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BodySection = styled.section`
  overflow-y: scroll;
  padding: 10px 20px;
  height: calc(100vh);
  width: 100%;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer>
    <Menu />
    <ContentContainer>
      <Topbar />
      <BodySection>{children}</BodySection>
    </ContentContainer>
  </LayoutContainer>
);
