import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './context/themeContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
)
