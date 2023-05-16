import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi, addContactsApi, deleteContactsApi } from 'api/Api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getContactsApi();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      return await addContactsApi(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteContactsApi(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
