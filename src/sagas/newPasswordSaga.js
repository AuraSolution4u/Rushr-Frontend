import { call, put, takeLatest } from "redux-saga/effects";
import { resetPasswordAPI } from "../api"; 
import {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
} from "../slices/newPasswordSlice";

function* handleResetPassword(action) {
  try {
    const response = yield call(resetPasswordAPI, action.payload);

    if (response.statusCode === 200 && response.message === "Success") {
      yield put(resetPasswordSuccess(response));
      alert("Password reset successful!");
    
      action.payload.navigate("/login");
    } else {
      yield put(resetPasswordFailure(response.message));
      alert(response?.message || "Failed to reset password. Please try again.");
    }
  } catch (error) {
    yield put(resetPasswordFailure(error.message || "Unknown error"));
    alert("An error occurred while resetting the password. Please try again.");
  }
}

export default function* newPasswordSaga() {
  yield takeLatest(resetPasswordRequest.type, handleResetPassword);
}
