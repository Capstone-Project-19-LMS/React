import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import materiAPI from "../apis/materi.api";
import axiosInstance from "../networks/api";

const initialState = {
  data: [],
};

export const getMateri = createAsyncThunk("materi/getAll", async () => {
  try {
    const response = await materiAPI.getAllMateri();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getMediaMateri = createAsyncThunk(
  "mediaMateri/getAll",
  async () => {
    try {
      const response = await materiAPI.getMediaMateri();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteMateri = createAsyncThunk("module/delete", async (id) => {
  const response = await axiosInstance.delete(
    `/instructor/module/delete/${id}`
  );
  console.log(response.data);
  return response.data;
});
const materiSlice = createSlice({
  name: "materi",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getMateri.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getMediaMateri.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(deleteMateri.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = state.data.filter(
          (course) => course.id !== action.payload._id
        );
        state.loading = !state.loading;
      });
  },
});

export default materiSlice.reducer;
