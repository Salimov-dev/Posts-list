import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    usersListRequested: (state) => {
      state.isLoading = true;
    },
    usersListReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    usersListFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;

const { usersListRequested, usersListReceived, usersListFailed } = actions;

export const loadUsersList = () => async (dispatch) => {
  dispatch(usersListRequested());
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    dispatch(usersListReceived(data));
  } catch (error) {
    usersListFailed(error.message);
  }
};

export const getUsers = () => (state) => state.users.entities;

export const getUserName = (userId) => (state) => state.users.entities.find((user) => user.id === userId).name

export const getSelectedUser = (userId) => (state) =>
  state.users.entities.find((user) => user.id === userId);

export default usersReducer;
