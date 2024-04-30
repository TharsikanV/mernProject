import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
const reducer=combineReducers({

})
configureStore({
    reducer,


})