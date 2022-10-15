import { createAction } from "@reduxjs/toolkit";

export const authStartAction = createAction("auth/start", (data: any) => {
    return {
        payload: data,
    };
});
export const authSuccessAction = createAction("auth/success", function prepare(data: any) {
    return {
        payload: {
            data,
        },
    };
});
export const authFailureAction = createAction("auth/failure", (error: any) => {
    return {
        payload: error,
    };
});

export const signout = createAction("auth/signout");
export const setAuthenticatedAdmin = createAction("auth/setAdmin");
