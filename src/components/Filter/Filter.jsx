import React from 'react';
import { Input, LabelFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactsSlice/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <LabelFilter htmlFor="filter">
        Find contacts by name
        <Input
          type="text"
          name="filter"
          onChange={({ target }) => dispatch(filterContact(target.value))}
        />
      </LabelFilter>
    </>
  );
};
