import React from 'react';
import { Form, Input } from './ContactForm.styled';
import { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addNewContact } from 'redux/contactsSlice/operations';
import { Button } from 'styles/Button';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  //додаємо до списку
  const hendleFormSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      toast.error(`Invalid value!`);
      return;
    }

    // Перевіряє, чи існує контакт з таким самим ім'ям у списку контактів.
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      toast.warning(`${name} is already in contacts`);
      return;
    }

    dispatch(addNewContact({ name, number }));
    toast.success(`Contact ${name} successfully added!`);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={hendleFormSubmit}>
      <label htmlFor="name">
        Name
        <Input
          value={name}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => {
            setName(e.target.value);
          }}
          placeholder="Name Surname"
          autoFocus
        />
      </label>
      <label htmlFor="number">
        Number
        <Input
          value={number}
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => {
            setNumber(e.target.value);
          }}
          placeholder="Phone Number"
        />
      </label>
      <Button>Add contact</Button>
    </Form>
  );
};
