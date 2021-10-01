import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  user: boolean;
}

const initialState: userState = {
  user: true,
};

export const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "login":
          state.user = true;
          break;
        case "logout":
          state.user = false;
          break;
        default:
          state.user = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserState } = userSlice.actions;

export default userSlice.reducer;
