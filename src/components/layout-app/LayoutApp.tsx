import { Button, Layout } from "antd";
import {
  Content,
  Footer,
  Header
} from "antd/es/layout/layout";
import {Outlet} from "react-router-dom";

const LayoutApp = () => {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#1b1b1b",
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo"/>
        <Button type="primary">Зарегестрироваться</Button>
      </Header>
      <Content
        style={{
          height: "100vh",
          backgroundColor: "#1b1b1b",
          padding: '0 48px',
        }}
      >
        <Outlet />
      </Content>
      <Footer
        style={{
          backgroundColor: "#1b1b1b",
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default LayoutApp
