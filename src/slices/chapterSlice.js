import { createSlice } from "@reduxjs/toolkit";

const chapterDetailSlice = createSlice({
  name: "chapter",
  initialState: {
    selectChapter: null,
  },
  reducers: {
    addChapter: (state, action) => {
      state.selectChapter = action.payload;
    },
  },
});

export const { addChapter } = chapterDetailSlice.actions;
export default chapterDetailSlice.reducer;
