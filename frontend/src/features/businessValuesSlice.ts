import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface BusinessValuesState {
  equipments: string[];
  musclesWorked: string[];
}

const initialState: BusinessValuesState = {
  equipments: [
    'Barbell',
    'Dumbbell',
    'Kettlebell',
    'Resistance Band',
    'MedBall',
    'Rigs',
    'Gymnastic Rings',
  ],
  musclesWorked: [
    'Glutes',
    'Trapezius',
    'Rhomboids',
    'Lats',
    'Chest',
    'Shoulders',
    'Quadriceps',
    'Hamstrings',
    'Calves',
    'Triceps',
    'Biceps',
    'Abs',
    'Forearms',
  ],
};

const businessValuesSlice = createSlice({
  name: 'businessValues',
  initialState,
  reducers: {},
});

export const selectEquipments = (state: RootState) =>
  state.businessValues.equipments;
export const selectMusclesWorked = (state: RootState) =>
  state.businessValues.musclesWorked;

export default businessValuesSlice.reducer;
