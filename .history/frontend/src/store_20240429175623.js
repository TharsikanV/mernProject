// import { combineReducers, configureStore} from "@reduxjs/toolkit";
// import {thunk} from "redux-thunk";
// import productsReducer from "./slices/productsSlice";

// const reducer=combineReducers({
//     productsState:productsReducer
// })

// const store=configureStore({
//     reducer,// or reducer:reducer
//     middleware:[thunk]
// })


// export default store;

import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./slices/productsSlice";

// Combine reducers
const rootReducer = combineReducers({
    productsState: productsReducer
});

// Configure the Redux store with getDefaultMiddleware and thunk
const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), thunk]
});

export default store;
