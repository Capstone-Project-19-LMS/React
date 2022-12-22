import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
  },
  reducers: {
    USER_ID: (state, action) => {
      state.id = action.payload;
    },
    USER_NAME: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { USER_NAME, USER_ID } = userSlice.actions;

export default userSlice.reducer;
// import {
//   createSlice,
//   createAsyncThunk,
//   createEntityAdapter,
// } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getLists = createAsyncThunk("/lists/getLists", async () => {
//   const response = await axios.get(
//     "https://6344d9a639ca915a69f1a747.mockapi.io/v1/lists"
//   );
//   return response.data;
// });

// const listEntity = createEntityAdapter({
//   selectId: (list) => list.id,
// });

// const instructorSlice = createSlice({
//   name: "list",
//   initialState: listEntity.getInitialState(),
//   extraReducers: {
//     [getLists.fulfilled]: (state, action) => {
//       listEntity.setAll(state, action.payload);
//     },
//   },
// });

// export const listSelectors = listEntity.getSelectors((state) => state.list);
// export default instructorSlice.reducer;
