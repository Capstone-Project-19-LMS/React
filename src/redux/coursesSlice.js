import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coursesAPI from "../apis/courses.api";
import axiosInstance from "../networks/api";

export const getCourses = createAsyncThunk(
  "/instructor/course/getCourse",
  async () => {
    const response = await axiosInstance.get(
      "https://gencer.live/instructor/course/get_all"
    );
    console.log(response.data);
    return response.data;
  }
);

export const getCoursesById = createAsyncThunk(
  "/instructor/course/get_by_id/",
  async (id) => {
    try {
      const response = await coursesAPI.getCoursesId(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createCourses = createAsyncThunk(
  "course/create",
  async ({ name, capacity, price, category_id, description }) => {
    try {
      const response = await coursesAPI.createCourse({
        name,
        capacity,
        price,
        category_id,
        description,
      });
      console.log(category_id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateCourses = createAsyncThunk("course/update", async (data) => {
  try {
    const response = await coursesAPI.updateCourses(data);
    return response;
  } catch (error) {
    console.log(error.response);
  }
});

export const deleteCourses = createAsyncThunk("course/delete", async (id) => {
  const response = await axiosInstance.delete(
    `https://gencer.live/instructor/course/delete/${id}`
  );
  console.log(response.data);
  // return response.data.courses.returning[0];
  return response.data.course;
});

const initialState = {
  data: [],
  dataID: [],
  status: "idle",
  loading: false,
  error: false,
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCourses.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCoursesById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCoursesById.fulfilled, (state, action) => {
        state.dataID = action.payload;
        state.loading = false;
      })
      .addCase(createCourses.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data.push(action.payload);
        // state.componentStatus = !state.componentStatus;
      })
      .addCase(deleteCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCourses.fulfilled, (state, action) => {
        const courseId = state.dataID.course_id;
        const updatedData = state.data.filter(
          (item) => item.course_id !== courseId
        );
        state.data = updatedData;
        state.loading = false;
      })
      .addCase(updateCourses.fulfilled, (state, action) => {
        state.status = "success";
        const id = action.payload._id;
        const indexData = state.data.findIndex((value) => value._id === id);
        const newArr = [...state.data];
        if (indexData >= 0) {
          newArr[indexData] = action.payload;
        }
        state.data = [...newArr];
        state.loading = !state.loading;
      });
    // builder.addCase(updateCourses.fulfilled, (state, { payload }) => {
    //   state.loading = false;
    //   state.error = false;
    //   state.data = state.data.map((val) => {
    //     if (val.ID === payload.ID) return payload;
    //     return val;
    //   });
    // });
  },
});

export default coursesSlice.reducer;
