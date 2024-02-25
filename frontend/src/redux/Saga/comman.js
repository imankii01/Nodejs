import { loginConstants, signupConstants } from "../../constant";
import { call, put } from "redux-saga/effects";
import { loginCall, singupCall } from "../../network";

export function* loginSaga(action) {
    console.log("sagfa8888")
    try {
        const response = yield call(loginCall, action.data);
        yield put({
            type: loginConstants.LOGIN_SUCCESS,
            data: response.data,
            status: response.status,
            error: response.error,
        });
    } catch (e) {
        yield put({
            type: loginConstants.LOGIN_FAILURE,
            error: e.message,
        });
    }
}

export function* singupSaga(action) {
    console.log("sagfa8888")
    try {
        const response = yield call(singupCall, action.data);
        yield put({
            type: signupConstants.SIGNUP_SUCCESS,
            data: response.data,
            status: response.status,
            error: response.error,
        });
    } catch (e) {
        yield put({
            type: signupConstants.SIGNUP_FAILURE,
            error: e.message,
        });
    }
}