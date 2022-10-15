import { createReducer } from "@reduxjs/toolkit";
import {
    authStartAction,
    authFailureAction,
    authSuccessAction,
    setAuthenticatedAdmin,
    signout,
} from "./authAction";

interface AuthState {
    authError: string | undefined;
    authLoading: boolean;
    adminDetails: any | undefined;
}

const initialState: AuthState = {
    authError: undefined,
    authLoading: false,
    adminDetails: undefined,
};

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(authStartAction, (state, action) => {
        state.authLoading = true;
        state.authError = undefined;
    });
    builder.addCase(authSuccessAction, (state, action) => {
        state.authLoading = false;
        state.adminDetails = action.payload.data;
        localStorage.setItem("user", JSON.stringify(action.payload.data));
    });
    builder.addCase(authFailureAction, (state, action) => {
        state.authLoading = false;
        state.authError = action.payload;
    });

    builder.addCase(setAuthenticatedAdmin, (state, action) => {
        let user = localStorage.getItem("user") as any;
        if (user) {
            user = JSON.parse(user);
            state.adminDetails = user.user;
        }
    });

    builder.addCase(signout, (state, action) => {
        localStorage.removeItem("user");
        state.adminDetails = undefined;
    });
});

export default authReducer;
