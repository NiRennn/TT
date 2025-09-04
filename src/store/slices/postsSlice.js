import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    addPost: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { setPosts, addPost } = postsSlice.actions;
export default postsSlice.reducer;
