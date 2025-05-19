import { configureStore } from "@reduxjs/toolkit";
import authenticatedReducer from "../slices/authenticatedSlice.js"
import chapterReducer from "../slices/chapterSlice.js"
import newChapterDetailsReducer from "../slices/chapterDetailsSlice.js"
import createSagaMiddleware from 'redux-saga'
// import mySaga from './authenticatedSaga.js'
import rootSaga from "./rootSaga.js";
import userReducer from "../features/users/userSlice.js"
import signUpUserDataReducer from "../slices/signUpUserSlice.js"
import otpValidationReducer from "../slices/otpValidationSlice.js";
import otpValidationSaga from "../sagas/otpValidationSaga.js";
import newPasswordSliceReducer from "../slices/newPasswordSlice.js"
import getMasterListSliceReducer from "../slices/getMasterListSlice.js"

const sagaMiddleware = createSagaMiddleware()
const appStore= configureStore({
    reducer:{
        authenticated:authenticatedReducer,
        chapter:chapterReducer,
        greek:newChapterDetailsReducer,
        user:userReducer,
        signUpformData: signUpUserDataReducer,
        otpValidation:otpValidationReducer,
        newPasswordSlice:newPasswordSliceReducer,
        getMasterListSlice:getMasterListSliceReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
  


})

sagaMiddleware.run(rootSaga)
sagaMiddleware.run(otpValidationSaga);

export default appStore

