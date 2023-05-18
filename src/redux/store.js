import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// contactsReduser те саме що state
import storage from 'redux-persist/lib/storage';
import contactsReduser from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';
import authReducer from './auth/authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: 'token',
};

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
  auth: persistReducer(persistConfig, authReducer),
  // auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
