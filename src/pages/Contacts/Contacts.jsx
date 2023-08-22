import React, { useEffect } from 'react';

import { ContactForm } from 'components/ContactsForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectLogin, selectUser } from 'redux/selectors';
import { StyledTitle, Title, Wrapper } from 'pages/Contacts/Contacts.styled';
import { fetchContacts } from 'redux/contactsSlice/operations';

const Contacts = () => {
  const { name } = useSelector(selectUser);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const isLogin = useSelector(selectLogin);

  useEffect(() => {
    isLogin && dispatch(fetchContacts());
  }, [dispatch, isLogin]);

  return (
    <Wrapper>
      <StyledTitle>
        Welcome, {name}! Create contacts to your heart's content.
      </StyledTitle>
      <Title>Chronicle of Connections</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading ? <Loader /> : <ContactList />}
    </Wrapper>
  );
};
export default Contacts;
