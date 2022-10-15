import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./features/root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/root-sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
