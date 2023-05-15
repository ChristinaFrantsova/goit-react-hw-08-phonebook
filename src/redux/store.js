import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// contactsReduser те саме що state
import storage from 'redux-persist/lib/storage';
import contactsReduser from './contactsSlice';
import filterReducer from './filterSlice';

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
  key: 'contacts',
  storage,
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsReduser),
  filter: filterReducer,
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
