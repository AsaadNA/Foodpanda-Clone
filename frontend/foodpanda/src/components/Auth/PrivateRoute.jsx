import React from "react";
// import { useAuth } from "../../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth: { isAuthenticated }, children, redirect }) => {
  return isAuthenticated ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;
