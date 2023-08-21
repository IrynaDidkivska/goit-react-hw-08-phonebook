import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { selectUser } from 'redux/selectors';
import { ImExit } from 'react-icons/im';
import { LogoutButton, StyledUserWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <StyledUserWrapper>
      <p>Welcome, {name} ! </p>
      <LogoutButton onClick={handleLogout()}>
        Logout
        <ImExit />
      </LogoutButton>
    </StyledUserWrapper>
  );
};
