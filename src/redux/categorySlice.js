import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../networks/api";

export const getCategory = createAsyncThunk(
  "/instructor/category/getCourse",
  async () => {
    const response = await axiosInstance.get(
      "https://gencer.live/instructor/category/get_all"
    );
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCategory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
      });
  },
});

export default categorySlice.reducer;
