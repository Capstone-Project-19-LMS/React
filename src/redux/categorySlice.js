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
    const response = await axiosInstance.get("/instructor/category/get_all");
    console.log(response.data);
    return response.data;
  }
);

// export const create = createAsyncThunk(
//   "course/create",
//   async ({ kelas, kapasitas, kategori, harga }) => {
//     const response = await axios.post(
//       "https://6344d9a639ca915a69f1a747.mockapi.io/v1/course",
//       {
//         kelas,
//         kapasitas,
//         kategori,
//         harga,
//       }
//     );
//     return response.data;
//   }
// );

// export const update = createAsyncThunk(
//   "course/update",
//   async ({ id, kelas, kapasitas, kategori, harga }) => {
//     const response = await axios.put(
//       `https://6344d9a639ca915a69f1a747.mockapi.io/v1/course/${id}`,
//       {
//         kelas,
//         kapasitas,
//         kategori,
//         harga,
//       }
//     );
//     return response.data;
//   }
// );

// export const deletes = createAsyncThunk("course/delete", async (id) => {
//   const response = await axios.delete(
//     `https://6344d9a639ca915a69f1a747.mockapi.io/v1/course/${id}`
//   );
//   return id;
// });

// const categoryEntity = createEntityAdapter({
//   selectId: (category) => category.id,
// });

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
