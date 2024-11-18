import { mockProgrammes } from '../assets/mockProgrammes';
import { Programme } from '../types/Models';
import { createAppAsyncThunk } from '../types/withTypes';

const fetchProgrammes = createAppAsyncThunk('programmes/fetchAll', async () => {
  // const response = await axios.get<Programme>(`/api/programmes`);
  // return response.data;

  return new Promise<Programme[]>((resolve) => {
    setTimeout(() => resolve(mockProgrammes), 500);
  });
});

export default fetchProgrammes;
