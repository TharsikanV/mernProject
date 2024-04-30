import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 're'

const reducer=combineReducers({

})

const store=configureStore({
    reducer,// or reducer:reducer
    middleware:[thunk]
})


export default store;