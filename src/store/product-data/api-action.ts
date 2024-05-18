import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { AppDispatch, RootState } from "@/types/redux-types.ts";
import { APIRoute } from "@/app/constants/ApiRoute.ts";
import { ProductData, ProductDataById } from "@/types/product-data.ts";

export const fetchProducts = createAsyncThunk<ProductData[], undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchProducts',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<ProductData[]>(APIRoute.product)
    return data
  },
)

export const fetchProductById = createAsyncThunk<ProductDataById, {id: string}, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchProductById',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<ProductDataById>(`${APIRoute.product}/${id}`)
    return data
  },
)
