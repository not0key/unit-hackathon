import { List } from "antd";
import CardProduct from "../card-product/CardProduct.tsx";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux-hooks.ts";
import { getProducts } from "@/store/product-data/product-data.selector.ts";
import { useEffect } from "react";
import { fetchProducts } from "@/store/product-data/api-action.ts";

const ListProducts = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(getProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return(
    <div className="list-products-container">
      <List
        grid={{
          gutter: 20,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 6,
        }}
        pagination={{
          pageSize: 18,
          position: 'bottom',
          align: 'start',
        }}
        dataSource={products}
        renderItem={(product) => (
          <List.Item key={product.id}>
            <CardProduct
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default ListProducts
