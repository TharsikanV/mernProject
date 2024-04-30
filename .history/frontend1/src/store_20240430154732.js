import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ThunkMiddleware } from 'redux-thunk';
import productsReducers from "./slices/productsSlice";
const reducer=combineReducers({
        productsState:productsReducers
})
const store=configureStore({
    reducer,
    middleware:[...getDe]//i have to complete


})

export default store;
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


// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { RootState, AppThunk } from './store';

// // Define your action types
// export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// // Define your thunk action creator using createAsyncThunk from @reduxjs/toolkit
// export const fetchData = createAsyncThunk(
//   'data/fetchData',
//   async (_, { dispatch }) => {
//     dispatch({ type: FETCH_DATA_REQUEST });
//     try {
//       // Perform asynchronous API call or any other async operation
//       const response = await fetch('https://api.example.com/data');
//       const data = await response.json();
//       dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
//       return data;
//     } catch (error) {
//       dispatch({ type: FETCH_DATA_FAILURE, payload: 'Error fetching data' });
//       throw error;
//     }
//   }
// );

// // Define additional action creators if needed
