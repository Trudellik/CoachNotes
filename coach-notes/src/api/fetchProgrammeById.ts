import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockProgrammes } from '../assets/testData';
import { Programme } from '../types/Models';
import axios from 'axios';

const fetchProgrammeById = createAsyncThunk(
  'programmes/fetchById',
  async (id: string) => {
    // const response = await axios.get<Programme>(`/api/programmes/${id}`);
    // return response.data;

    return new Promise<Programme | undefined>((resolve) => {
      const foundProgramme = mockProgrammes.find((prog) => prog.id === id);
      setTimeout(() => resolve(foundProgramme), 100);
    });
  }
);

export default fetchProgrammeById;
