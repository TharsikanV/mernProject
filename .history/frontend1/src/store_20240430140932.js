import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
const reducer=combineReducers({

})
configureStore({
    reducer,
    middleware:[]

})