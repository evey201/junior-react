import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer.js';
// import productReducer from "./features/products.js";

// export const store = configureStore({
//   reducer: {
//     students: productReducer,
//   },
// })

const middlewares = [];

// To log redux actions in dev environment
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));


// To persist data
export const persistor = persistStore(store);

export default { store, persistor };