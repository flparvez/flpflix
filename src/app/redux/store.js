
import { configureStore } from '@reduxjs/toolkit';


import userReducer from "./slice";

import { apiSlice } from './dataslice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        userData: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})



// import userReducer from "./slice";

// import itemReducer from './dataslice'
// const { configureStore } = require("@reduxjs/toolkit");


// export const store = configureStore({
//     reducer: {
//         userData: userReducer,
//         items: itemReducer,

//     }
// })