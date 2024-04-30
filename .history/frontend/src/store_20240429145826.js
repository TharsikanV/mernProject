// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import thunk from 'redux-thunk';

// const reducer=combineReducers({

// })

// const store=configureStore({
//     reducer,// or reducer:reducer
//     middleware:[thunk]
// })


// export default store;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux"; // Import applyMiddleware from redux
import thunk from 'redux-thunk';

const reducer = combineReducers({
  // Add your reducers here
});

const store = configureStore({
  reducer,
  middleware: [applyMiddleware(thunk)] // Use applyMiddleware to apply thunk middleware
});

export default store;
