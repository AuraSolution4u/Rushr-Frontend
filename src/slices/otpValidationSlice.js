import { createSlice } from "@reduxjs/toolkit";

const otpValidationSlice = createSlice({
  name: "otpValidation",
  initialState: {
    status: "idle",
    message: "",
    otp: "",
    emailId: "",
    error: null,
  },
  reducers: {
    validateOtpRequest: (state) => {
      state.status = "loading";
      state.error = null;
    },
    validateOtpSuccess: (state, action) => {
      state.status = "succeeded";
      state.message = action.payload.message;
    },
    validateOtpFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    generatedOtp: (state, action) => {
      state.otp = action.payload;
    },
    emailForOtp: (state, action) => {
      state.emailId = action.payload;
    },
  },
});

export const {
  validateOtpRequest,
  validateOtpSuccess,
  validateOtpFailure,
  generatedOtp,
  emailForOtp,
} = otpValidationSlice.actions;

export default otpValidationSlice.reducer;
