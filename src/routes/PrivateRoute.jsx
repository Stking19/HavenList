import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PrivateRoute = () => {
    const isAuth = useSelector((state) => state.auth.isAuthenticated)
    console.log(isAuth)
  return (
    isAuth ? <Outlet /> : <Navigate to="/sign-in" replace={true} />
  )
}

export default PrivateRoute