import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
const reducer=combineReducers({

})
configureStore({
    reducer,
    middleware:


})

// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; // Assuming you have a rootReducer
// import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';

// // Define the type for your root state
// export type RootState = ReturnType<typeof rootReducer>;

// // Create an interface for the root action types
// export type RootAction = // Define your action types here

// // Define the type for the thunk middleware
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// // Create the store using configureStore with thunk middleware
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware as ThunkMiddleware<RootState, RootAction>)
// });

// export default store;


// 