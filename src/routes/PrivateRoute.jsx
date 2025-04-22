import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();
  const role = localStorage.getItem("role");

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  if (role === "tenant" && location.pathname === "/") {
    return <Navigate to="/home" replace />;
  }

  if (role === "landlord" && location.pathname === "/home") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;