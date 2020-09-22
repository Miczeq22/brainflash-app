import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '@assets/logo.svg';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  font-weight: 700;
  font-size: 23px;
  color: ${({ theme }) => theme.color.fontPrimary};
  margin-left: 10px;
`;

export const StyledIcon = styled(LogoIcon)`
  width: 50px;
  height: 50px;
`;
