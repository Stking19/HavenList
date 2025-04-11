import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router'
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
<<<<<<< HEAD
import LandLordListing from './pages/Arinze/LandLordListing'
import LandlordPropertyUpload from './pages/Arinze/LandlordPropertyUpload'

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
          path: '/landlordLisitng',
          element: <LandLordListing/>,
        },

        {
          path:'/landlordPropertyUpload',
          element:<LandlordPropertyUpload/>
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
    }
  ])
=======
import AboutUsPage from './pages/Joshua/AboutUsPage/AboutUsPage'
import EmailConfirmation from './components/EmailConfirmation/EmailConfirmation'
import LandlordDashboard from './pages/Stephen/landlord/LandlordDashboard'

const App = () => {
>>>>>>> 36f6dccee947cce3faa31e084436e12bf03ead10
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path='/' element={<Home />} />
          <Route path='/propertydetails' element={<PropertyDetails />} />
          <Route path='/listings' element={<Listing />} />
          <Route path='/T&Cs' element={<TermsCondition />} />
          <Route path='/about' element={<AboutUsPage />} />
        </Route>
        <Route path='/sign-in' element={<Login />}/>
        <Route path='/register' element={<SignUp />}/>
        <Route path='/reset-password' element={<PasswordReset />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/verify' element={<Verify />}/>
        <Route path='/private' element={<PrivateRoute />}>
          <Route path='' element={<LandlordDashboard />} />
        </Route>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/confirm-email' element={<EmailConfirmation />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App