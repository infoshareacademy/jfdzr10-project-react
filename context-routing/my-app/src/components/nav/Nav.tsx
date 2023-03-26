
import {Styled} from './Nav.styles'

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Styled.StyledNavLink to='/'>Homepage</Styled.StyledNavLink>
        </li>
        <li>
          <Styled.StyledNavLink to='/o-nas'>O nas</Styled.StyledNavLink>
        </li>
        <li>
          <Styled.StyledNavLink to='/posts'>Posty</Styled.StyledNavLink>
        </li>
        <li>
          <Styled.StyledNavLink to='/kontakt'>Kontakt</Styled.StyledNavLink>
        </li>
        <li>
          <Styled.StyledNavLink to='/dodaj-post'>Dodaj post</Styled.StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};
