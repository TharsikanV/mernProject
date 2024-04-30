import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const reducer=combineReducers({

})

const configureStore({
    reducer,// or reducer:reducer
    middleware:[thunk]
})