import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App.jsx'
import Veiculo from './componentes/Veiculo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Veiculo />
  </React.StrictMode>,
)
