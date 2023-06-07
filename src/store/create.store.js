import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts.store";
import usersReducer from "./users.store";
import commentsReducer from "./comments.store";
import searchQueryReducer from "./searchQuery.store";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
  searchQuery: searchQueryReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
