

import { all } from 'redux-saga/effects';


import userSaga from "../features/users/userSaga"
import getMasterListSaga from '../sagas/getMasterListSaga';


export default function* rootSaga() {
  yield all([userSaga(), getMasterListSaga(),]);
}
