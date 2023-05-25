import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App.jsx'
import './index.css'
import {Route, Routes} from 'react-router-dom'
import Repository from './componentes/Repository.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes>
    <Route path='/'  element={<App/>}/>
    <Route path='/repository'  element={<Repository/>}/>
    </Routes>
  </React.StrictMode>,
)
