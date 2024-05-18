import { createSlice } from "@reduxjs/toolkit";
import {fetchProductById, fetchProducts} from "@/store/product-data/api-action.ts";
import {ProductsState} from "@/types/product-data.ts";

const initialState: ProductsState = {
  products: [],
  product: undefined,
  isProductsDataLoading: false,
  isProductDataLoading: false
}

export const productData = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isProductsDataLoading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.isProductsDataLoading = false
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isProductDataLoading = true
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload
        state.isProductDataLoading = false
      })
  }
})
