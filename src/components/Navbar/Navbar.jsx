import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectLogin } from 'redux/selectors';
import { StyledLink } from 'styles/Link';
import { StyledHeaderWrapper, StyledNav } from './Navbar.styled';

export const Navbar = () => {
  const isLogin = useSelector(selectLogin);

  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      {isLogin && <StyledLink to="/contacts">Contacts</StyledLink>}

      <StyledHeaderWrapper>
        {isLogin ? (
          <UserMenu />
        ) : (
          <>
            <StyledLink to="/reg">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </>
        )}
      </StyledHeaderWrapper>
    </StyledNav>
  );
};
