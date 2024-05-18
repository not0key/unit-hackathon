import { List } from "antd";
import CardProduct from "../card-product/CardProduct.tsx";

const ListProducts = () => {
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
        dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]}
        renderItem={() => (
          <List.Item>
            <CardProduct/>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ListProducts
