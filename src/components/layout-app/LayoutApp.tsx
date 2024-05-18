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
import { useState } from "react";
import SingIn from "@/components/sing-in/SingIn.tsx";

const LayoutApp = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const showModal = () => {
    setOpen(true)
  };

  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
    }, 2000)
  }

  const handleCancel = () => {
    setOpen(false)
  }

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
        <Button
          onClick={showModal}
          type="text"
          style={{color: "#FFFFFF", marginLeft: "auto"}}
        >
          <UserOutlined />Личный кабинет
        </Button>
        <Search
          placeholder="Поиск"
          allowClear
          style={{
            width: 200,
            alignContent: "end"
          }}
        />
      </Header>
      <Content
        style={{
          minHeight: "100vh",
          backgroundColor: "#1b1b1b",
          padding: '0 120px',
        }}
      >
        <Outlet />
        <SingIn
          open={open}
          loading={loading}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </Content>
      <Footer
        style={{
          backgroundColor: "#1b1b1b",
          textAlign: 'center',
        }}
      >
        WARPOINT ©{new Date().getFullYear()}. Все права защищены
      </Footer>
    </Layout>
  )
}

export default LayoutApp
