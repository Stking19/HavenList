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
import LandLordListing from './pages/Arinze/LandLordListing'
import LandlordPropertyUpload from './pages/Arinze/LandlordPropertyUpload'
import AboutUsPage from './pages/Joshua/AboutUsPage/AboutUsPage'
import EmailConfirmation from './components/EmailConfirmation/EmailConfirmation'
import LandlordDashboard from './pages/Stephen/landlord/LandlordDashboard'
import SuccessCard from './components/SuccessCard/SuccessCard'
import ScrollToTop from './components/ScrollToTop'


const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path='/' element={<Home />} />
          <Route path='/propertydetails' element={<PropertyDetails />} />
          <Route path='/LandLordListing' element={<LandLordListing />} />
          <Route path='/LandlordPropertyUpload' element={<LandlordPropertyUpload />} />
          <Route path='/listings' element={<Listing />} />
          <Route path='/T&Cs' element={<TermsCondition />} />
          <Route path='/about' element={<AboutUsPage />} />
        </Route>
        <Route path='/sign-in/:role' element={<Login />}/>
        <Route path='/register/:role' element={<SignUp />}/>
        <Route path='/reset-password' element={<PasswordReset />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/verify/:token' element={<Verify />}/>
        <Route path='/private' element={<PrivateRoute />}>
          <Route path='' element={<LandlordDashboard />} />
        </Route>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/confirm-email' element={<EmailConfirmation />}/>
        <Route path= "/success" element={<SuccessCard/>}/>
        <Route path= '*' element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App