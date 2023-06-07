
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    entities: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    commentsListRequested: (state) => {
      state.isLoading = true;
    },
    commentsListReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    commentsListFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: commentsReducer, actions } = commentsSlice;

const { commentsListRequested, commentsListReceived, commentsListFailed } = actions;

export const loadCommentsList = (postId) => async (dispatch) => {
  dispatch(commentsListRequested());
  try {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    dispatch(commentsListReceived(data));
  } catch (error) {
    commentsListFailed(error.message);
  }
};

// export const loadCommentsList = () => async (dispatch) => {
//   dispatch(commentsListRequested());
//   try {
//     const { data } = await axios("https://jsonplaceholder.typicode.com/comments");
//     dispatch(commentsListReceived(data));
//   } catch (error) {
//     commentsListFailed(error.message);
//   }
// };

export const getComments = () => (state) => state.comments.entities;

export default commentsReducer;
