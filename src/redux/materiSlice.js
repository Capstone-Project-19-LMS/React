import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import materiAPI from "../apis/materi.api";
import axiosInstance from "../networks/api";

const initialState = {
  data: [],
  dataID: [],
  mediaModule: [],
  status: "idle",
  loading: false,
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

export const createMateri = createAsyncThunk(
  "media/create",
  async ({ name, content, course_id, no_module, url }) => {
    try {
      const response = await materiAPI.createMateri({
        name,
        content,
        course_id,
        no_module,
        url,
      });
      console.log(course_id);
      return response;
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
      .addCase(getMateri.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getMateri.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
        state.mediaModule = action.payload;
        state.loading = false;
      })
      .addCase(getMediaMateri.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(createMateri.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data.push(action.payload);
      })
      .addCase(deleteMateri.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMateri.fulfilled, (state, action) => {
        const materiId = state.dataID.materi_id;
        const updatedData = state.data.filter(
          (item) => item.materi_id !== materiId
        );
        state.data = updatedData;
        state.loading = false;
      });
  },
});

export default materiSlice.reducer;
