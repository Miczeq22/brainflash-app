import styled from 'styled-components';

interface NavigationListItemProps {
  active?: boolean;
}

export const StyledNav = styled.nav`
  width: 375px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
  border-right: 1px solid ${({ theme }) => theme.color.gray};
  padding: 20px 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`;

export const ActionsContainer = styled.section``;

export const ButtonContainer = styled.section`
  margin: 30px 0;

  & > button {
    padding: 0 30px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;

    & > .anticon {
      width: 18px;
      height: 18px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const NavigationHeading = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.fontGray};
`;

export const NavigationList = styled.ul`
  list-style: none;
`;

export const NavigationListItem = styled.li<NavigationListItemProps>`
  margin: 15px 0;

  & > a {
    padding: 15px 0 15px 10px;
    width: 100%;
    display: block;
    border-radius: 6px;
    background-color: ${({ theme, active = false }) =>
      active ? theme.color.gray : theme.color.white};
    color: ${({ theme, active = false }) =>
      active ? theme.color.fontPrimary : theme.color.fontGray};
    font-weight: 500;
    position: relative;
    transition: background-color 0.3s ease;

    &::after {
      ${({ active }) => active && "content: ''"};
      background-color: ${({ theme }) => theme.color.primary};
      width: 4px;
      height: 100%;
      position: absolute;
      top: 0;
      right: -20px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.color.gray};
    }
  }
`;

export const MenuIcon = styled.img``;
