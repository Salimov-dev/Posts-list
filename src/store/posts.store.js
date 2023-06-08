import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    entities: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    postsListRequested: (state) => {
      state.isLoading = true;
    },
    postsListReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    postsListFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: postsReducer, actions } = postsSlice;

const { postsListRequested, postsListReceived, postsListFailed } = actions;

export const loadPostsList = () => async (dispatch) => {
  dispatch(postsListRequested());
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    setTimeout(() => {
      dispatch(postsListReceived(data));
    }, 500);
  } catch (error) {
    postsListFailed(error.message);
  }
};

export const getPosts = () => (state) => state.posts.entities;

export default postsReducer;
