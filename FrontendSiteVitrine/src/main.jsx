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
import AdDashboard from './pages/PageAdmin/services/Evenement/AdDashboard.jsx'
import Evenement from './pages/PageAdmin/services/Evenement/Evenement.jsx'
import CreateEvent from './pages/PageAdmin/services/Evenement/CreateEvent.jsx'
import BarNav from './pages/PageUser/SiteVitrineUser/BarNav.jsx'
import VenteEvent from './pages/PageAdmin/views/VenteEvent.jsx'
import Event from './pages/PageUser/SiteVitrineUser/Evenement/Event.jsx'
import EventDetail from './pages/PageUser/SiteVitrineUser/Evenement/EventDetail.jsx'
import Confirmation from './pages/PageUser/SiteVitrineUser/Evenement/Confirmation.jsx'
import Payment from './pages/PageUser/SiteVitrineUser/Evenement/Payment.jsx'
import Transport from './pages/PageUser/SiteVitrineUser/Transport/Transport.jsx'
import TicketInfo from './pages/PageUser/SiteVitrineUser/Evenement/TicketInfo.jsx'
import TransportDetails from './pages/PageUser/SiteVitrineUser/Transport/TransportDetails.jsx'
import TransportReserve from './pages/PageUser/SiteVitrineUser/Transport/TransportReserve.jsx'
import PageTrans from './pages/PageAdmin/services/Transport/PageTrans.jsx'
import DashboardTrans from './pages/PageAdmin/services/Transport/DashboardTrans.jsx'
import CreateTrans from './pages/PageAdmin/services/Transport/CreateTrans.jsx'
import VenteTrans from './pages/PageAdmin/services/Transport/VenteTrans.jsx'


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
  ////////////////////////////////////////EVENT 

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

  ///////////////////////////////////////TRANSPORT 

  {
    path: "pagetrans",
    element: <PageTrans />,
    children: [
      {
        path: "dashboardtrans",
        element: <DashboardTrans />,
      },

      {
        path: "createtrans",
        element: <CreateTrans />,
      },

      {
        path: "ventetrans",
        element: <VenteTrans />,
      },


    ],

  },

  ///
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

  {
    path: "payment",
    element: <Payment />

  },

  {
    path: "ticketinfo",
    element: <TicketInfo />

  },


  {
    path: "transports",
    element: <Transport />

  },

  {
    path: "transportdetail",
    element: <TransportDetails />

  },
  {
    path: "transportreserve",
    element: <TransportReserve />

  },




])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
