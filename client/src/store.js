import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/features/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer
  },
});
