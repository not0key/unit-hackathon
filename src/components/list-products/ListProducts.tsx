import { List } from "antd";
import CardProduct from "../card-product/CardProduct.tsx";

const ListProducts = () => {
  return(
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={[1, 2, 3, 4, 5, 6]}
      renderItem={() => (
        <List.Item>
          <CardProduct />
        </List.Item>
      )}
    />
  )
}

export default ListProducts
