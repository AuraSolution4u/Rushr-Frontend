import { createSlice } from '@reduxjs/toolkit';

const newPasswordSlice = createSlice({
  name: 'newPassword',
  initialState: {
    status: 'idle', 
    message: '',
    error: null,
  },
  reducers: {
    resetPasswordRequest: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    resetPasswordSuccess: (state, action) => {
      state.status = 'succeeded';
      state.message = action.payload.message;
    },
    resetPasswordFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
} = newPasswordSlice.actions;

export default newPasswordSlice.reducer;
