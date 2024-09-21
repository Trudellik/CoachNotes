import { createAppAsyncThunk } from '../types/withTypes';
import { client } from './client';

export const login = createAppAsyncThunk(
  'auth/login',
  async (username: string) => {
    await client.post('/fakeApi/login', { username });
    return username;
  }
);
