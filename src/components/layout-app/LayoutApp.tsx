import { Layout, Button } from "antd";
import {
  Content,
  Footer,
  Header
} from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { WarpointLogo } from "@/assets";
import Search from "antd/es/input/Search";
import { UserOutlined } from "@ant-design/icons";

const LayoutApp = () => {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#1b1b1b",
          display: 'flex',
          alignItems: 'center',
          padding: '0 200px',
        }}
      >
        <WarpointLogo width={"156px"} />
        <Button type="text" style={{color: "#FFFFFF"}}><UserOutlined />Личный кабинет</Button>
        <Search
          placeholder="Поиск"
          allowClear
          style={{
            width: 200,
          }}
        />
      </Header>
      <Content
        style={{
          height: "100vh",
          backgroundColor: "#1b1b1b",
          padding: '0 120px',
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
