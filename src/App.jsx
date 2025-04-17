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
import Home from './pages/Stephen/home/Home'
import AboutUsPage from './pages/Joshua/AboutUsPage/AboutUsPage'
import EmailConfirmation from './components/EmailConfirmation/EmailConfirmation'
import LandlordDashboard from './pages/Stephen/landlord/LandlordDashboard'
import Help from './pages/Joshua/help/Help'
import Role from './components/role/Role'
import TenantLogin from './auth/tenantlogin/TenantLogin'
import TenantLandingPage from './pages/Stephen/TenantLandingPage'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/propertyDetails/:productId',
          element: <PropertyDetails />
        },
        {
          path: '/listings',
          element: <Listing />
        },
        {
          path: '/help',
          element: <Help />
        },
        {
          path: '/about',
          element: <AboutUsPage />
        },
      ]
    },
    {
      path: '/home',
      element: <TenantLandingPage />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'propertydetails',
          element: <PropertyDetails />
        },
        {
          path: 'listings',
          element: <Listing />
        },
        {
          path: 'help',
          element: <Help />
        },
        {
          path: 'about',
          element: <AboutUsPage />
        },
      ]
    },
    {
      path: '/sign-in/landlord',
      element: <Login />,
    },
    {
      path: '/sign-in/tenant',
      element: <TenantLogin />,
    },
    {
      path: '/register/:role',
      element: <SignUp />,
    },
    {
      path: '/role',
      element: <Role />,
    },
    {
      path: '/reset-password/:role',
      element: <PasswordReset />,
    },
    {
      path: '/forgot-password/:role',
      element: <ForgotPassword />,
    },
    {
      path: '/verify/:role',
      element: <Verify />,
    },
    {
      path: '/api/v1/:role/:token',
      element: <EmailConfirmation />,
    },
    {
      path: '/private',
      element: <PrivateRoute />,
      children: [
        {
          path: '',
          element: <LandlordDashboard />
        }
      ]
    },
    {
      path: '/payment',
      element: <Payment />
    },
    {
      path: '*',
      element: <Error />
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
