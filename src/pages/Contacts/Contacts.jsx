import React from 'react';

import { ContactForm } from 'components/ContactsForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { Title, Wrapper } from 'App.styled';
import { logoutThunk } from 'redux/auth/operations';
import { Button } from 'styles/Button';
export const Contacts = () => {
  const loading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <div>
      <p>mango@mail.com</p>
      <Button type="button" onClick={handleLogout()}>
        Logout
      </Button>
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {loading ? <Loader /> : <ContactList />}
      </Wrapper>
    </div>
  );
};
