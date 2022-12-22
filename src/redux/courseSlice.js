import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios";

export const getCourse = createAsyncThunk("course/getCourse", async() => {
    const response = await axios.get("https://6344d9a639ca915a69f1a747.mockapi.io/v1/course");
    return response.data;
});

export const create = createAsyncThunk("course/create", async({kelas, kapasitas, kategori, harga}) => {
    const response = await axios.post("https://6344d9a639ca915a69f1a747.mockapi.io/v1/course", {
        kelas,
        kapasitas,
        kategori,
        harga
    });
    return response.data;
})

export const update = createAsyncThunk("course/update", async({id, kelas, kapasitas, kategori, harga}) => {
    const response = await axios.put(`https://6344d9a639ca915a69f1a747.mockapi.io/v1/course/${id}`, {
        kelas,
        kapasitas,
        kategori,
        harga
    });
    return response.data;
})

export const deletes = createAsyncThunk("course/delete", async(id) => {
    const response = await axios.delete(`https://6344d9a639ca915a69f1a747.mockapi.io/v1/course/${id}`);
    return id;
});

const courseEntity = createEntityAdapter({
    selectId: (course) => course.id
});

const courseSlice = createSlice({
    name: "course",
    initialState: courseEntity.getInitialState(),
    extraReducers:{
        [getCourse.fulfilled]: (state, action) => {
            courseEntity.setAll(state, action.payload);
        },
        [create.fulfilled]: (state, action) => {
            courseEntity.addOne(state, action.payload);
        },
        [update.fulfilled]: (state, action) => {
            courseEntity.updateOne(state, {id: action.payload.id, updates: action.payload});
        },
        [deletes.fulfilled]: (state, action) => {
            courseEntity.removeOne(state, action.payload);
        },
    }
});

export const courseSelectors = courseEntity.getSelectors(state => state.course);
export default courseSlice.reducer