import { createSlice } from "@reduxjs/toolkit";

const signUpUserSlice = createSlice({
  name: "signUpformData",
  initialState: {
    FormData: {
      name: "",
      email: "",
    },
  },

  reducers: {
    storeFormData: (state, action) => {
      state.FormData = action.payload;
    },
  },
});

export const { storeFormData } = signUpUserSlice.actions;

export default signUpUserSlice.reducer;
