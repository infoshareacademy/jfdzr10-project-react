import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: blue;
  }
`;

export const Styled = {
  StyledNavLink,
};
