import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface teamCountState {
  count: {
    total: number;
    good: number;
    bad: number;
  };
}

const initialState: teamCountState = {
  count: {
    total: 0,
    good: 0,
    bad: 0,
  },
};

export const teamCountSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload === "good") {
        state.count = {
          total: state.count.total + 1,
          good: state.count.good + 1,
          bad: state.count.bad,
        };
      } else {
        state.count = {
          total: state.count.total + 1,
          good: state.count.good,
          bad: state.count.bad + 1,
        };
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      if (action.payload === "good") {
        state.count = {
          total: state.count.total - 1,
          good: state.count.good - 1,
          bad: state.count.bad,
        };
      } else {
        state.count = {
          total: state.count.total - 1,
          good: state.count.good,
          bad: state.count.bad - 1,
        };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = teamCountSlice.actions;

export default teamCountSlice.reducer;
