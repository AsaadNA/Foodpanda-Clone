import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirect }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;
