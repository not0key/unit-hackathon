import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/app/constants/AppRoute.ts";

const CardProduct = () => {
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
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta
        title="Футболка Warpoint"
        description="2990 рублей"
      />
    </Card>
  )
}

export default CardProduct
