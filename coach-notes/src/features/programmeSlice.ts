import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Programme } from '../types/Models';
import { RootState } from '../app/store';
import { mockProgrammes } from '../assets/mockProgrammes';

interface ProgrammeState {
  list: Programme[];
  // status: 'idle' | 'pending' | 'succeeded' | 'rejected';
  // error: string | null;
}

const initialState: ProgrammeState = {
  list: mockProgrammes,
  // status: 'idle',
  // error: null,
};

const programmeSlice = createSlice({
  name: 'programme',
  initialState,
  reducers: {
    addProgramme: (state, action: PayloadAction<Programme>) => {
      state.list.push(action.payload);
    },

    updateProgramme: (state, action: PayloadAction<Programme>) => {
      const index = state.list.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },

    deleteProgramme: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProgrammeById.pending, (state, action) => {
  //       state.status = 'pending';
  //       state.error = null;
  //     })
  //     .addCase(fetchProgrammeById.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.value = action.payload;
  //     })
  //     .addCase(fetchProgrammeById.rejected, (state, action) => {
  //       state.status = 'rejected';
  //       state.error = action.error.message ?? 'Unknown Error';
  //     });
  // },
});

export const selectProgrammes = (state: RootState) => state.programme.list;
export const selectProgrammeById =
  (programmeId: string) => (state: RootState) =>
    state.programme.list.find((programme) => programme.id === programmeId);

// export const selectProgrammeStatus = (state: RootState) =>
//   state.programme.status;
// export const selectProgrammeError = (state: RootState) => state.programme.error;

export const { addProgramme, updateProgramme, deleteProgramme } =
  programmeSlice.actions;

export default programmeSlice.reducer;
