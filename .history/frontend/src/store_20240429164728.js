// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import thunk from 'redux-thunk';

// const reducer=combineReducers({

// })

// const store=configureStore({
//     reducer,// or reducer:reducer
//     middleware:[]
// })


// export default store;
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [], // You can add middleware here
  devTools: process.env.NODE_ENV !== 'production' // Enable DevTools in development
});

export default store;
