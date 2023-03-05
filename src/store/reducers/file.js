import { createSlice } from "@reduxjs/toolkit";

export const fileSlice = createSlice({
  name: "File",
  initialState: {
    file: null,
  },
  reducers: {
    addFile: (state, action) => {
      state.file = action.payload;
    },
    removeFile: (state) => {
      state.file = null;
    },
  },
});

export const { addFile, removeFile } = fileSlice.actions;

export default fileSlice.reducer;
