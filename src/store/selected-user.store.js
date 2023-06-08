import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState: {
    entities: "",
  },
  reducers: {
    selectedUserSetted: (state, action) => {
      state.entities = action.payload;
    },
  },
});

const { reducer: selectedUserReducer, actions } = selectedUserSlice;

const { selectedUserSetted } = actions;

export const setSelectedUser = (query) => (dispatch) => {
  dispatch(selectedUserSetted(query));
  localStorage.setItem("selected-user-id", query);
};

export const getSelectedUserId = () => (state) => state.selectedUser.entities;

export default selectedUserReducer;
