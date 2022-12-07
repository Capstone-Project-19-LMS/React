import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./instructorSlice";
import userReducer from "./instructorSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
