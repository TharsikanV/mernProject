import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from
const reducer=combineReducers({

})
configureStore({
    reducer,
    middleware:[]

})