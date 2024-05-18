import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/app/constants/AppRoute.ts";

interface CardProduct {
  image: string
  title: string
  price: number
}

const CardProduct = ({image, title, price}: CardProduct) => {
  const navigate = useNavigate()

  return(
    <Card
      onClick={() => navigate(AppRoute.ABOUT_PRODUCT)}
      hoverable
      style={{
        textAlign: "center",
        maxWidth: 300,
      }}
      cover={
        <img
          alt="example"
          src={image}
        />
      }
    >
      <Meta
        title={title}
        description={price}
      />
    </Card>
  )
}

export default CardProduct
