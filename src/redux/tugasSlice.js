import { createSlice } from "@reduxjs/toolkit";

import {DataTugas} from "../data/Data";

export const tugasSlice = createSlice({
    name: "tugass",
    initialState: { value: DataTugas },
    reducers: {
        deleteTugas: (state, action) => {
            state.value = state.value.filter(
                (tugas) => tugas.id !== action.payload.id
            );
        },

        updateTugas: (state, action) => {
            state.value.map((tugas) => {
                if (tugas.id === action.payload.id) {
                    tugas.nilai = action.payload.nilai;
                }
            });
        },
    }
});

export const { deleteTugas, updateTugas } = tugasSlice.actions;
export default tugasSlice.reducer;