import { BellOutlined, DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { logout } from '@context/auth/auth.action-creators';
import { useAuthState } from '@hooks/use-auth-state/use-auth-state';
import { Button, Dropdown, Input, Menu } from 'antd';
import React from 'react';
import { ActionsContainer, StyledTopbar } from './topbar.styles';

export const Topbar = () => {
  const { dispatch } = useAuthState();

  const handleMenuClick = ({ key }: any) => {
    if (key === 'logout') {
      dispatch(logout());
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <StyledTopbar>
      <Input.Search placeholder="Search for specif deck..." />
      <ActionsContainer notificationCount={10}>
        <BellOutlined />
        <Dropdown overlay={menu} trigger={['click']}>
          <Button>
            Hello, Mikołaj <DownOutlined />
          </Button>
        </Dropdown>
      </ActionsContainer>
    </StyledTopbar>
  );
};
