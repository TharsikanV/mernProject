import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer=combineReducers({

})

configureStore({
    reducer,// or reducer:reducer
    middleware:[]
})