import {Button, Image} from "antd";

const AboutProduct = () => {
  return(
    <div style={{padding:'0 150px'}}>
      <h1 style={{textAlign: "center", fontSize: "24px", fontWeight: 600}}>Футболка</h1>
      <div style={{display: "flex", gap:"20px", alignItems: "center"}}>
        <Image.PreviewGroup
          items={[
            'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
          ]}
        >
          <Image
            width={400}
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          />
        </Image.PreviewGroup>
        <Button type="primary" style={{marginBottom: "auto"}}>В корзину</Button>
        <Button style={{marginBottom: "auto"}}>Купить в один клик</Button>
      </div>
      <div>
        <h1>Описание:</h1>
        <p>бла бла бла бла бла</p>
      </div>
    </div>
  )
}

export default AboutProduct
