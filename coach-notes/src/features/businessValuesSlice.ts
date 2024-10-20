import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

// Define the initial state for business values
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
    'Gymnastic Rings'
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
    'Forearms'
  ]
};

// Create a slice for business values
const businessValuesSlice = createSlice({
  name: 'businessValues',
  initialState,
  reducers: {}
});

// Selectors to get the equipments and muscles worked from the state
export const selectEquipments = (state: RootState) => state.businessValues.equipments;
export const selectMusclesWorked = (state: RootState) => state.businessValues.musclesWorked;

export default businessValuesSlice.reducer;