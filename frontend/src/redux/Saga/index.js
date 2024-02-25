import { takeLatest, all } from "redux-saga/effects";
import { loginConstants, signupConstants } from "../../constant";
import { loginSaga, singupSaga } from "./comman";

function* actionWatcher() {
    yield takeLatest(loginConstants.LOGIN_REQUEST, loginSaga);
    yield takeLatest(signupConstants.SIGNUP_REQUEST, singupSaga);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
