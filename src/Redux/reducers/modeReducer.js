import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

const mode = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setDarkMode(state, action) {
      return {
        ...state,
        isDarkMode: action.payload._isDarkMode,
      };
    },
  },
});

export const actions = mode.actions;

export default mode.reducer;
