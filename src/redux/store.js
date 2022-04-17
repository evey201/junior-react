import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./features/products.js";

export const store = configureStore({
  reducer: {
    students: productReducer,
  },
})