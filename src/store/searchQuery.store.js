import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState: {
    entities: "",
  },
  reducers: {
    searchQueryListSetted: (state, action) => {
      state.entities = action.payload;
    },
  },
});

const { reducer: searchQueryReducer, actions } = searchQuerySlice;

const { searchQueryListSetted } = actions;

export const setSearchQuery = (query) => (dispatch) =>
  dispatch(searchQueryListSetted(query));

export const getSearchQuery = () => (state) => state.searchQuery.entities;

export default searchQueryReducer;
