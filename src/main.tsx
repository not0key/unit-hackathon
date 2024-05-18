import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import 'antd/dist/reset.css'
import App from "@/app/App.tsx"
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
