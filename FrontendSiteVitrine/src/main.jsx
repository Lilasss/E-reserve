import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Inscription from './pages/Inscription.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
  ,
  {
    path: "home",
    element: <Home />,
  },

  {
    path: "login",
    element: <Login />
  },

  {
    path: "inscription",
    element: <Inscription />
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
