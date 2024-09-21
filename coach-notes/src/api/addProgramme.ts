import { Programme } from '../types/Models';
import { createAppAsyncThunk } from '../types/withTypes';
import { client } from './client';

type NewProgramme = Pick<
  Programme,
  'name' | 'programme' | 'date' | 'attentionNote'
>;

const addProgramme = createAppAsyncThunk(
  'posts/addNewPost',
  async (initialPost: NewProgramme) => {
    const response = await client.post<Programme>(
      '/fakeApi/posts',
      initialPost
    );
    return response.data;
  }
);

export default addProgramme;
