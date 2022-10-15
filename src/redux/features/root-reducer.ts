import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";

export default combineReducers({
    auth: authReducer,
});
