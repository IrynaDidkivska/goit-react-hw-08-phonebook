import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addNewContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filterValue: '',
};
const pending = (state, action) => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};
const rejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = toast.error(`${payload}`);
};

export const listSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filterValue = action.payload; // Оновлення значення фільтра на основі переданої дії
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
      })
      .addCase(addNewContact.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })

      .addMatcher(
        isAnyOf(fetchContacts.pending, addNewContact.pending),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addNewContact.fulfilled
        ),
        state => {
          state.contacts.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addNewContact.rejected
        ),
        rejected
      );
  },
});
// Екпортуємо наші екшени, щоб вони працювали в компонентах при dispatch
export const { filterContact } = listSlice.actions;
// Eкспортуємо редьюсер для того, щоб додати його в configureStore, котрий в store.js
export const contactReducer = listSlice.reducer;
