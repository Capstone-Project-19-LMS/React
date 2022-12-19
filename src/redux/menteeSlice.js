import { createSlice } from "@reduxjs/toolkit";

import {DataMantee} from "../data/Data";

export const menteeSlice = createSlice({
    name: "mentees",
    initialState: { value: DataMantee },
    reducers: {
        deleteMentee: (state, action) => {
            state.value = state.value.filter(
                (mentee) => mentee.id !== action.payload.id
            );
        },

        updateMentee: (state, action) => {
            state.value.map((mentee) => {
                if (mentee.id === action.payload.id) {
                    mentee.status = action.payload.status;
                }
            });
        },
    }
});

export const { deleteMentee, updateMentee } = menteeSlice.actions;
export default menteeSlice.reducer;