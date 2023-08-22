import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations';
import { selectUser } from 'redux/selectors';
import { ImExit } from 'react-icons/im';
import { LogoutButton, LogoutText, StyledUserWrapper } from './UserMenu.styled';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { name } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => navigate(location.state?.location || '/'));
    toast.success(`See you soon ${name}!`);
  };
  return (
    <StyledUserWrapper>
      <LogoutText>{name} </LogoutText>
      <LogoutButton onClick={handleLogout}>
        Logout
        <ImExit />
      </LogoutButton>
    </StyledUserWrapper>
  );
};
