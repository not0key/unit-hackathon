import { Button, Modal, Input, Form } from "antd";

interface SingInProps {
  open: boolean;
  loading: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const SingIn = ({ open, handleOk, handleCancel }: SingInProps) => {
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
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default SingIn
