import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exercise } from '../types/Models';
import { RootState } from '../app/store';
import { mockExercises } from '../assets/mockExercises';

interface ExerciseState {
  list: Exercise[];
  // status: 'idle' | 'pending' | 'succeeded' | 'rejected';
  // error: string | null;
}

const initialState: ExerciseState = {
  list: mockExercises,
  // status: 'idle',
  // error: null,
};

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    
  },
});

export const selectExercises = (state: RootState) => state.exercise.list;
export const selectExerciseById =
  (exerciseId: string) => (state: RootState) =>
    state.exercise.list.find((exercise) => exercise.id === exerciseId);

  export const selectExercisesAlphabetically = (state: RootState) =>
    state.exercise.list.slice().sort((a, b) => a.name.localeCompare(b.name));

  export const selectExercisesWithAliases = (state: RootState) => 
    state.exercise.list.map((exercise) => ({
      ...exercise,
      terms: [exercise.name, ...exercise.alias]
    }));
// export const selectProgrammeStatus = (state: RootState) =>
//   state.programme.status;
// export const selectProgrammeError = (state: RootState) => state.programme.error;

export const {  } =
  exerciseSlice.actions;

export default exerciseSlice.reducer;
