import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'idle',
    message: '',
    error: null,
  },
  reducers: {
    userRegistrationRequest: (state) => {
      state.status = 'loading';
    },
    userRegistrationSuccess: (state, action) => {
      state.status = 'succeeded';
      state.message = action.payload.message;
    },
    userRegistrationFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  userRegistrationRequest,
  userRegistrationSuccess,
  userRegistrationFailure,
} = userSlice.actions;

export default userSlice.reducer;
