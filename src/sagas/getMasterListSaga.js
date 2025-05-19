// src/store/sagas/masterListSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMasterListStart,
  fetchMasterListSuccess,
  fetchMasterListFailure,
} from "../slices/getMasterListSlice";
import { getMasterList } from "../features/users/api";

function* handleFetchMasterList() {

  try {
   // yield put(fetchMasterListStart());
    const data = yield call(getMasterList);
    console.log("masterlist saga", data);

    if (data.message === "Success") {
      yield put(fetchMasterListSuccess(data));
    }

    return data;
  } catch (error) {
    yield put(fetchMasterListFailure(error.message));
  }
}

export default function* getMasterListSaga() {
  yield takeLatest(fetchMasterListStart.type, handleFetchMasterList);
}
