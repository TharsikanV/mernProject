// import { combineReducers, configureStore} from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import productsReducer from "./slices/productsSlice";

// const reducer=combineReducers({
//     productsState:productsReducer
// })

// const store=configureStore({
//     reducer,// or reducer:reducer
//     middleware:[thunk]
// })


// export default store;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./slices/productsSlice";

// Combine reducers
const rootReducer = combineReducers({
    productsState: productsReducer
});

// Configure the Redux store
const store = configureStore({
    reducer: rootReducer, // Pass the combined reducer here
    middleware: [thunk]
});

export default store;
