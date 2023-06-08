import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";

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
      state.entities =
        state.entities.length === 0
          ? _.groupBy([...state.entities, ...action.payload], "postId")
          : Object.assign(state.entities, _.groupBy(action.payload, "postId"));
      state.isLoading = false;
    },
    commentsListFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: commentsReducer, actions } = commentsSlice;

const { commentsListRequested, commentsListReceived, commentsListFailed } =
  actions;

export const loadCommentsList = (postId) => async (dispatch) => {
  dispatch(commentsListRequested());
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    setTimeout(() => {
      dispatch(commentsListReceived(data));
    }, 500);
  } catch (error) {
    commentsListFailed(error.message);
  }
};

// export const loadCommentsList = (postId) => async (dispatch) => {
//   dispatch(commentsListRequested());
//   try {
//     const { data } = await axios(
//       `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
//     );
//     setTimeout(() => {
//       // dispatch(commentsListReceived(prevState => prevState, ...data))
//       dispatch(commentsListReceived(data));
//     }, 500);
//   } catch (error) {
//     commentsListFailed(error.message);
//   }
// };

export const getComments = () => (state) => state.comments.entities;

export const getCommentsStatus = () => (state) => {
  return state.comments.isLoading;
};

export default commentsReducer;
