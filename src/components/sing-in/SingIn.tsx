import { Button, Modal, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@/app/constants/AppRoute.ts";;

interface SingInProps {
  open: boolean;
  loading: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const SingIn = ({ open, handleOk, handleCancel }: SingInProps) => {
  const navigate = useNavigate()

  return(
    <Modal
      open={open}
      title="Вход"
      onOk={handleOk}
      onCancel={handleCancel}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      footer={[]}
    >
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        size="middle"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Введите коректный email!',
            },
            {
              required: true,
              message: 'Пожалуйста, введите email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="пароль"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите пароль!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
          <Button type="text" onClick={() => navigate(AppRoute.AUTHORIZATION)}>
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default SingIn
