import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Sidebar from './pages/PageAdmin/views/Sidebar.jsx'
import AdminPage from './pages/PageSuperAdmin/Adminpage.jsx'
import Dashboard from './pages/PageSuperAdmin/Dashboard.jsx'
import AdminManagement from './pages/PageSuperAdmin/AdminManagement.jsx'
import Adminpages from './pages/PageAdmin/services/Adminpages.jsx'
import AdDashboard from './pages/PageAdmin/services/AdDashboard.jsx'
import Evenement from './pages/PageAdmin/services/Evenement.jsx'
import CreateEvent from './pages/PageAdmin/services/CreateEvent.jsx'
import BarNav from './pages/PageUser/SiteVitrineUser/BarNav.jsx'
import VenteEvent from './pages/PageAdmin/views/VenteEvent.jsx'
import Event from './pages/PageUser/SiteVitrineUser/Evenement/Event.jsx'
import EventDetail from './pages/PageUser/SiteVitrineUser/Evenement/EventDetail.jsx'
import Confirmation from './pages/PageUser/SiteVitrineUser/Evenement/Confirmation.jsx'


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
    path: "reservation",
    element: <BarNav />
  },

  {
    path: "sidebar",
    element: <Sidebar />
  },

  {
    path: "user",
    element: <BarNav />,

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

  {
    path: "admin",
    element: <Adminpages />,
    children: [
      {
        path: "admindashboard",
        element: <AdDashboard />,
      },

      {
        path: "evenement",
        element: <Evenement />,
      },

      {
        path: "createevent",
        element: <CreateEvent />,
      },

      {
        path: "venteevent",
        element: <VenteEvent />,
      }
    ],

  },

  {
    path: "events",
    element: <Event />
  },

  {
    path: "event/:id",
    element: <EventDetail />
  },

  {
    path: "confirmation",
    element: <Confirmation />
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
