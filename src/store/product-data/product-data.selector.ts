import { RootState } from "@/types/redux-types.ts";
import { ProductData } from "@/types/product-data.ts";

export const getProducts = (state: Pick<RootState, 'products'>): ProductData[] => state.products.products
export const getProductsDataLoadingStatus = (state: Pick<RootState, 'products'>): boolean => state.products.isProductsDataLoading
