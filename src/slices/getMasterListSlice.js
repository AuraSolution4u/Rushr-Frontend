// src/store/slices/getMasterListSlice.js
import { createSlice } from "@reduxjs/toolkit";

const getMasterListSlice = createSlice({
  name: "masterList",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMasterListStart(state) {
      
      state.loading = true;
      state.error = null;
    },
    fetchMasterListSuccess(state, action) {
       
      state.data = action.payload;
      state.loading = false;
    },
    fetchMasterListFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export const {
  fetchMasterListStart,
  fetchMasterListSuccess,
  fetchMasterListFailure,
} = getMasterListSlice.actions;

export default getMasterListSlice.reducer;
