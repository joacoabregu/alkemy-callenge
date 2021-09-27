import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hero } from "../types/interfaces";

export interface HeroesTeamState {
  team: Hero[];
}

const initialState: HeroesTeamState = {
  team: [],
};

export const heroesTeamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Hero>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.team.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.team.splice(
        state.team.findIndex((hero) => hero.id === action.payload.toString()),
        1
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = heroesTeamSlice.actions;

export default heroesTeamSlice.reducer;
