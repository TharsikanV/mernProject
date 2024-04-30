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
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./slices/productsSlice";

const rootReducer = combineReducers({
    productsState: productsReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
