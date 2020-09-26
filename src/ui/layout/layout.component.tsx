import { Menu } from '@ui/menu/menu.component';
import { Topbar } from '@ui/topbar/topbar.component';
import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.main`
  display: flex;
`;

const ContentContainer = styled.section`
  flex: 1;
  overflow: hidden;
  height: 100vh;
`;

const BodySection = styled.section`
  max-width: 1065px;
  overflow-y: scroll;
  padding: 10px 20px;
  height: calc(100vh - 70px);
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
