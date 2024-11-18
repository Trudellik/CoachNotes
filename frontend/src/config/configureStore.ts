import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../app/store';
import dateTransform from './dateTransformConfig';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'programme', 'preparationNotes'],
  transform: [dateTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
