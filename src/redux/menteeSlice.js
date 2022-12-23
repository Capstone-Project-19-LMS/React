import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { DataMantee } from "../data/Data";
import axiosInstance from "../networks/api";

const initialState = {
  data: [],
  dataID: [],
  status: "idle",
  loading: false,
  error: false,
};

export const getMentee = createAsyncThunk(
  "/instructor/course/getCourse",
  async () => {
    const response = await axiosInstance.get(
      "https://www.gencer.live/instructor/course/get_by_id/11f51cdd3aa7473c9fe9dda469788e7c/enroll"
    );
    console.log(response.data);
    return response.data;
  }
);

export const menteeSlice = createSlice({
  name: "mentees",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getMentee.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getMentee.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getMentee.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { deleteMentee, updateMentee } = menteeSlice.actions;
export default menteeSlice.reducer;
