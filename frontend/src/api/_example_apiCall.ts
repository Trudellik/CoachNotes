// export const fetchPosts = createAppAsyncThunk(
//   'posts/fetchPosts',
//   async () => {
//     const response = await client.get<Post[]>('/fakeApi/posts');
//     return response.data;
//   },
//   {
//     condition(arg, thunkApi) {
//       const postsStatus = selectPostsStatus(thunkApi.getState());
//       if (postsStatus !== 'idle') {
//         return false;
//       }
//     },
//   }
// );

// export const addNewPost = createAppAsyncThunk(
//   'posts/addNewPost',
//   async (initialPost: NewPost) => {
//     const response = await client.post<Post>('/fakeApi/posts', initialPost);
//     return response.data;
//   }
// );
