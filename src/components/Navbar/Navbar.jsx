import { Contact } from 'components/ContactsList/ContactList.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectLogin } from 'redux/selectors';
import { Container } from 'styles/Container';
import { StyledLink } from 'styles/Link';

export const Navbar = () => {
  const isLoggedIn = useSelector(selectLogin);

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}

      <Container>
        <StyledLink to="/reg">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </Container>
      <UserMenu />
    </nav>
  );
};
