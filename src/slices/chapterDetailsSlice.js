import { createSlice } from "@reduxjs/toolkit";

const chapterGreekSlice = createSlice({
  name: "chapterGreek",
  initialState: {
    selectGreekName: "",
  },
  reducers: {
    addGreekText: (state, action) => {
      state.selectGreekName = action.payload;
    },
  },
});

export const { addGreekText } = chapterGreekSlice.actions;
export default chapterGreekSlice.reducer;
