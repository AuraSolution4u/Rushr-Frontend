import { call, put, takeLatest } from "redux-saga/effects";
import { validateOtpAPI, userRegistrationAPI } from "../features/users/api"; // Ensure `userRegistrationAPI` is imported
import {
  validateOtpFailure,
  validateOtpSuccess,
  validateOtpRequest,
} from "../slices/otpValidationSlice";

function* handleValidateOtp(action) {
  console.log("Saga Execution Started - validateOtpRequest:", action);
  const { emailId, otp, regUserData, signupPath } = action.payload;
  console.log(emailId, otp, "valid");

  try {
    // Step 1: Call OTP validation API
    const response = yield call(validateOtpAPI, { emailId, otp });
    console.log("API Response in Saga:", response);

    if (response.statusCode === 200 && response.message === "Success") {
      console.log("Validation successful:", response);

      // Dispatch success action
      yield put(validateOtpSuccess(response));
      console.log("Validation successful part-2:", response);

      // Step 2: Get registration data from the store

      // Step 3: Call user registration API
      if (action.payload.signupPath.path == "signupverify") {
        console.log("Registration Data from Store:", regUserData);
        const registrationResponse = yield call(
          userRegistrationAPI,
          JSON.stringify(regUserData)
        );
        console.log("Registration Response:", registrationResponse);

        if (registrationResponse?.statusCode === 200) {
          console.log("User successfully registered");

          // Redirect to success page
          action.payload.navigate("/success");
          // resetpassword page
        } else {
          console.error("User registration failed:", registrationResponse);
          alert(
            registrationResponse?.message ||
              "Failed to register user. Please try again."
          );
        }
      } else if (action.payload.signupPath.path == "resetpassword") {
        action.payload.navigate("/resetpassword");
      }
    } else {
      console.error("Validation failed:", response);
      yield put(validateOtpFailure(response.message));
      alert(response?.message || "Failed to validate OTP. Please try again.");
    }
  } catch (error) {
    console.error("Error during OTP validation:", error);

    const errorMessage =
      error.response?.data?.message || error.message || "Unknown error";
    yield put(validateOtpFailure(errorMessage));
    alert("An error occurred while validating OTP. Please try again.");
  }

  console.log("Saga Execution Completed");
}

export default function* otpValidationSaga() {
  yield takeLatest(validateOtpRequest.type, handleValidateOtp);
}
