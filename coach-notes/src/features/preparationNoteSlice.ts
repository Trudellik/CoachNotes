import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PreparationNote } from '../types/Models';
import { mockPreparationNotes } from '../assets/testData';
import { deleteProgramme } from './programmeSlice';
import { RootState } from '../app/store';

interface PreparationNotesState {
  preparationNotes: PreparationNote[];
}

const initialState: PreparationNotesState = {
  preparationNotes: mockPreparationNotes,
};

const preparationNotesSlice = createSlice({
  name: 'preparationNotes',
  initialState,
  reducers: {
    addPreparationNote: (state, action: PayloadAction<PreparationNote>) => {
      state.preparationNotes.push(action.payload);
    },

    updatePreparationNote: (state, action: PayloadAction<PreparationNote>) => {
      const index = state.preparationNotes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        state.preparationNotes[index] = action.payload;
      }
    },

    deletePreparationNote: (state, action: PayloadAction<string>) => {
      state.preparationNotes = state.preparationNotes.filter(
        (note) => note.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteProgramme, (state, action: PayloadAction<string>) => {
      state.preparationNotes = state.preparationNotes.filter(
        (note) => note.programmeId !== action.payload
      );
    });
  },
});

export const selectPreparationNotes = (state: {
  preparationNotes: PreparationNotesState;
}) => state.preparationNotes.preparationNotes;

export const selectHasPreparationNotes =
  (programmeId: string) => (state: RootState) => {
    return state.preparationNotes.preparationNotes.some(
      (note: PreparationNote) => note.programmeId === programmeId
    );
  };

export const selectPreparationNotesByProgrammeId =
  (programmeId: string) => (state: RootState) => {
    return state.preparationNotes.preparationNotes.find(
      (note: PreparationNote) => note.programmeId === programmeId
    );
  };

export const {
  addPreparationNote,
  deletePreparationNote,
  updatePreparationNote,
} = preparationNotesSlice.actions;

export default preparationNotesSlice.reducer;
