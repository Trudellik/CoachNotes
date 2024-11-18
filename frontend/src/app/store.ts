import { Action, combineReducers } from 'redux';
import authReducer from '../features/authSlice';
import programmeReducer from '../features/programmeSlice';
import preparationNotesReducer from '../features/preparationNoteSlice';
import exerciseReducer from '../features/exerciseSlice';
import { ThunkAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { store } from '../config/configureStore';
import { resetStore } from '../features/resetActions';
import businessValuesReducer from '../features/businessValuesSlice';

const appReducer = combineReducers({
  auth: authReducer,
  programme: programmeReducer,
  preparationNotes: preparationNotesReducer,
  exercise: exerciseReducer,
  businessValues: businessValuesReducer,
});

export const rootReducer = (state: any, action: any) => {
  if (resetStore.match(action)) {
    storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
