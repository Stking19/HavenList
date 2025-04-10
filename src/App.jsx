import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PrivateRoute from './routes/PrivateRoute'
import Error from './components/error/Error'
import LandingPage from './pages/LandingPage'
import Login from './auth/login/Login'
import SignUp from './auth/register/SignUp'
import PasswordReset from './auth/resetPassword/PasswordReset'
import ForgotPassword from './auth/forgotPassword/ForgotPassword'
import Verify from './auth/verify/Verify'
import Listing from './pages/Arinze/listing/Listing'
import PropertyDetails from './pages/Arinze/propertydetails/PropertyDetails'
import Payment from './pages/Joshua/payment/Payment'
import TermsCondition from './pages/Joshua/T&Cs/TermsCondition'
import Home from './pages/Stephen/home/Home'
import AboutUsPage from './pages/Joshua/AboutUsPage/AboutUsPage'
import DashboardHeader from './components/DashboardHeader/DashboardHeader'
import ProfilePage from './pages/Joshua/ProfilePage/ProfilePage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
      children:[
        { 
          path: '/',
          element: <Home />
        },

        {
          path: '/propertydetails/:id',
          element: <PropertyDetails />,
        },

        {
          path: '/listings',
          element: <Listing />,
        },

        {
          path: '/T&Cs',
          element: <TermsCondition />
        },
      ]
    },

    {
      path: "/sign-in",
      element: <Login />
    },

    {
      path: "/register",
      element: <SignUp />
    },
    
    {
      path: "/reset-password",
      element: <PasswordReset />
    },

    {
      path: "/forgot-password",
      element: <ForgotPassword />
    },

    {
      path: "/verify",
      element: <Verify />
    },

    {
      path: '/private',
      element: <PrivateRoute />
    },

    {
      path: '/payment',
      element: <Payment />
    },

    {
      path: '*',
      element: <Error />
    },

    {
      path: "/aboutus",
      element: <AboutUsPage/>
    },

    {
      path: "/dashboardheader",
      element: <DashboardHeader/>
    },

    {
      path: "/profile",
      element: <ProfilePage/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App