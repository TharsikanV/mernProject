import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import productsReducer from "./slices/"

const reducer=combineReducers({

})

const store=configureStore({
    reducer,// or reducer:reducer
    middleware:[thunk]
})


export default store;