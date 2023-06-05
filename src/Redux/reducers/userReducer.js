import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
}

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        currentUser: action.payload.currentUser,
      }
    }
  }
});

export const actions = user.actions;

export default user.reducer;