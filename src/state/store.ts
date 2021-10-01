import { configureStore } from "@reduxjs/toolkit";
import heroesTeamReducer from "./heroesTeamSlice";
import countReducer from "./countSlice";
import userReducer from "./loginSlice";

export const store = configureStore({
  reducer: {
    team: heroesTeamReducer,
    count: countReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
