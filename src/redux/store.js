import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listReducer from "./instructorSlice";
import userReducer from "./instructorSlice";
import courseReducer from "./courseSlice";
import categoryReducer from "./coursesSlice";
import coursesSlice from "./coursesSlice";
import categorySlice from "./categorySlice";
import materiSlice from "./materiSlice";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     category: categoryReducer,
//   },
// });
const reducer = combineReducers({
  courses: coursesSlice,
  category: categorySlice,
  materi: materiSlice,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
