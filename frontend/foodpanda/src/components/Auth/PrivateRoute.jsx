import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import UnAuthorized from "./UnAuthorized";

const PrivateRoute = ({ children, redirect, type }) => {
  const { currentUser, userType } = useContext(AuthContext);
  if (currentUser && userType === type) {
    console.log("Authorized", currentUser, userType);
    return children;
  } else if (currentUser !== null) {
    console.log("UnAuthorized");
    return <UnAuthorized></UnAuthorized>;
  } else {
    window.location.href = redirect;
  }
};

export default PrivateRoute;
