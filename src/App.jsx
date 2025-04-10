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

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path='/' element={<Home />} />
          <Route path='/propertydetails/:id' element={<PropertyDetails />} />
          <Route path='/listings' element={<Listing />} />
          <Route path='/T&Cs' element={<TermsCondition />} />
        </Route>
        <Route path='/sign-in' element={<Login />}/>
        <Route path='/register' element={<SignUp />}/>
        <Route path='/reset-password' element={<PasswordReset />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/verify' element={<Verify />}/>
        <Route path='/private' element={<PrivateRoute />}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App