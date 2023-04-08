import { createSlice } from "@reduxjs/toolkit";

export const subtitleSlice = createSlice({
  name: "Subtitles",
  initialState: {
    subtitles: null,
  },
  reducers: {
    addSubtitles: (state, action) => {
      state.subtitles = action.payload;
    },
  },
});

export const { addSubtitles } = subtitleSlice.actions;

export default subtitleSlice.reducer;
