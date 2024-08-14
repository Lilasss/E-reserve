import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Inscription from './pages/Inscription.jsx'
import BarNav from './pages/PageUser/SiteVitrineUser/BarNav.jsx'
import Sidebar from './pages/PageAdmin/views/Sidebar.jsx'
import AdminPage from './pages/PageSuperAdmin/Adminpage.jsx'
import Dashboard from './pages/PageSuperAdmin/Dashboard.jsx'
import AdminManagement from './pages/PageSuperAdmin/AdminManagement.jsx'


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
  },

  {
    path: "reservation",
    element: <BarNav />
  },

  {
    path: "sidebar",
    element: <Sidebar />
  },

  {
    path: "superadmin",
    element: <AdminPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "adminmanagement",
        element: <AdminManagement />,
      },

    ],
  },


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
