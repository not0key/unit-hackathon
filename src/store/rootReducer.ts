import { combineReducers } from "@reduxjs/toolkit";
import { productData } from "@/store/product-data/product-data.slice.ts";

export const rootReducer = combineReducers({
  'products': productData.reducer
})
