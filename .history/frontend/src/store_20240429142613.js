import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const reducer=combineReducers({

})

// const store=configureStore({
//     reducer,// or reducer:reducer
//     middleware:[thunk]
// })
const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;