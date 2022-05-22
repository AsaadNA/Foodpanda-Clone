import React from "react";
// import { useAuth } from "../../Contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ auth: { isAuthenticated } }, children) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
