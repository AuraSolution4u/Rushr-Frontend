

import { call, put, takeLatest } from 'redux-saga/effects';
import { userRegistrationAPI } from './api';
import {
  userRegistrationRequest,
  userRegistrationSuccess,
  userRegistrationFailure,
} from './userSlice';




function* handleUserRegistration(action) {
  try {
    const response = yield call(userRegistrationAPI, action.payload);
    console.log(response, "response");
    yield put(userRegistrationSuccess(response.data)); // Dispatch success action
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    yield put(userRegistrationFailure(errorMessage)); // Dispatch meaningful error
  }
}



export default function* userSaga() {
  yield takeLatest(userRegistrationRequest.type, handleUserRegistration);
}

