import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./instructorSlice";
import userReducer from "./instructorSlice";
import courseReducer from "./courseSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer
  },
});

export default store;
