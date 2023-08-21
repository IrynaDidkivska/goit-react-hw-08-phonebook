import React from 'react';

import { Contact, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice/operations';
import { Button } from 'styles/Button';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
    toast.success(`Contact ${name} successfully deleted!`);
  };

  //фільтруємо;
  const getFilteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredData = getFilteredContact();

  return (
    <>
      <List>
        {filteredData.map(contact => (
          <Contact key={contact.id}>
            <p>{contact.name} : </p>
            <p> {contact.number}</p>
            <Button
              onClick={() => {
                handleDelete(contact.id, contact.name);
              }}
            >
              Delete
            </Button>
          </Contact>
        ))}
      </List>
    </>
  );
};
