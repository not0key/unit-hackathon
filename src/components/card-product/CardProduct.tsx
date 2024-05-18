import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";

const CardProduct = () => {
  const navigate = useNavigate()

  return(
    <Card
      onClick={() => navigate('/')}
      hoverable
      style={{
        textAlign: "center",
        width: 300,
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
