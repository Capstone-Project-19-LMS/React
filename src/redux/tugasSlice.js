import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { DataTugas } from "../data/Data";
import axiosInstance from "../networks/api";

const initialState = {
  data: [],
  dataID: [],
  status: "idle",
  loading: false,
  error: false,
};

export const getTugas = createAsyncThunk(
  "/instructor/course/getCourse",
  async () => {
    const response = await axiosInstance.get(
      "https://www.gencer.live/instructor/customer_assignment/get_all"
    );
    console.log(response.data);
    return response.data;
  }
);

export const deleteTugas = createAsyncThunk("tugas/delete", async (id) => {
  const response = await axiosInstance.delete(
    `https://gencer.live/customer/customer_assignment/delete/${id}`
  );
  console.log(response.data);
  // return response.data.courses.returning[0];
  return response.data;
});

export const tugasSlice = createSlice({
  name: "tugass",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getTugas.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getTugas.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getTugas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteTugas.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTugas.fulfilled, (state, action) => {
        const tugasId = state.dataID.tugas_id;
        const updatedData = state.data.filter(
          (item) => item.tugas_id !== tugasId
        );
        state.data = updatedData;
        state.loading = false;
      });
  },
});

export default tugasSlice.reducer;
