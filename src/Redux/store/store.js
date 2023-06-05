import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "../reducers/modeReducer";
import tokenReducer from "../reducers/tokenReducer";
import userReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    mode: modeReducer,
    token: tokenReducer,
    user: userReducer,
  }
})

export default store;