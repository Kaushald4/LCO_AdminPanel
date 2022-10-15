import { call, put, takeLatest } from "redux-saga/effects";
import { AnyAction } from "@reduxjs/toolkit";

import { login } from "./authRequest";
import {
    authSuccessAction,
    authFailureAction,
    authStartAction,
} from "./../../features/auth/authAction";

function* loginSaga(action: AnyAction): any {
    try {
        const adminResponse = yield call(login, action.payload);
        yield put(authSuccessAction(adminResponse.data));
    } catch (e: any) {
        console.log(e);
        yield put(authFailureAction(e.message));
    }
}

export function* watchAuthSaga() {
    yield takeLatest(authStartAction.toString(), loginSaga);
}
