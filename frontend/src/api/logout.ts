import { createAppAsyncThunk } from '../types/withTypes';
import { client } from './client';

export const logout = createAppAsyncThunk('auth/logout', async () => {
  await client.post('/fakeApi/logout', {});
});
