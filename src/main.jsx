import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.scss'
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ConfigProvider theme={{ token: { colorPrimary: "#6832ce" } }}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
)
