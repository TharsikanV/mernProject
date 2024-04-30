import { combineReducers, configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./slices/productsSlice";

const reducer=combineReducers({
    productsState:productsReducer
})

const store=configureStore({
    reducer,// or reducer:reducer
    middleware:[thunk,...getDefaultMiddleware()]
})


export default store;