import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from './thunk';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(
        action => {
          if (
            action.type.startsWith('contacts') &&
            action.type.endsWith('/pending')
          )
            return true;
        },
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => {
          if (
            action.type.startsWith('contacts') &&
            action.type.endsWith('/rejected')
          )
            return true;
        },
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        action => {
          if (
            action.type.startsWith('contacts') &&
            action.type.endsWith('/fulfilled')
          )
            return true;
        },
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export default contactsSlice.reducer;
