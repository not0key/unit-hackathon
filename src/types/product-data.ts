export type ProductData = {
  id: string;
  title: string
  description: string
  price: number
  category: string
  image: string
}

type ProductDataKeys = keyof ProductData

export type ProductDataById = {
  id: string
}& {
  [Key in ProductDataKeys]: ProductData[Key];
}

export type ProductsState = {
  products: ProductData[],
  product?: ProductDataById,
  isProductsDataLoading: boolean,
  isProductDataLoading: boolean
}
