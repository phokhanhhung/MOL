import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
}

const token = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken(state, action) {
      return {
        accessToken: action.payload.accessToken,
      }
    }
  }
});

export const actions = token.actions;

export default token.reducer;