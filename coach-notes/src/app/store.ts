import { Action, combineReducers } from 'redux';
import authReducer from '../features/authSlice';
import programmeReducer from '../features/programmeSlice';
import preparationNotesReducer from '../features/preparationNoteSlice';
import { ThunkAction } from '@reduxjs/toolkit';
import { store } from '../config/configureStore';

export const rootReducer = combineReducers({
  auth: authReducer,
  programme: programmeReducer,
  preparationNotes: preparationNotesReducer,
});

// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>;
// Export a reusable type for handwritten thunks
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
