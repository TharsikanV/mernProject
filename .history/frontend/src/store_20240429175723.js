import { combineReducers, configureStore} from "@reduxjs/toolkit";
import {thunkfrom "redux-thunk";
import productsReducer from "./slices/productsSlice";

const reducer=combineReducers({
    productsState:productsReducer
})

const store=configureStore({
    reducer,// or reducer:reducer
    middleware:[thunk]
})


export default store;