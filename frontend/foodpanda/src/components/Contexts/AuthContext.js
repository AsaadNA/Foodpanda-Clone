import React, { useState, createContext } from "react";
import jwtDecode from "jwt-decode";
import axios from "../Api/Api";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setuserType] = useState(null);
  const [loading, setloading] = useState(false);

  const logout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("SavedToken");
    window.location.href = "/";
  };

  const loginResturant = (email, password, loginRoute) => {
    axios
      .post(loginRoute, {
        email: email,
        password: password,
      })
      .then((response) => {
        let token = response.headers["x-auth-token"];
        setCurrentUser(true);
        setuserType(response.data.data.userType);
        localStorage.setItem("SavedToken", token);
        localStorage.setItem("currentUser", true);
        localStorage.setItem("userType", response.data.data.userType);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const loginCustomer = (username, password, loginRoute) => {
    axios
      .post(loginRoute, {
        username: username,
        password: password,
      })
      .then((response) => {
        let token = response.data.token;
        token = jwtDecode(token);
        localStorage.setItem("token", token.toString());
        setCurrentUser(true);
        console.log(response.data);
        setuserType(response.data.data.userType);
        localStorage.setItem("currentUser", true);
        localStorage.setItem("userType", response.data.data.userType);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <AuthContext.Provider
        value={{
          currentUser,
          loginResturant,
          loginCustomer,
          logout,
          token,
          loading,
          userType,
          setCurrentUser,
          setuserType,
        }}
      >
        {!loading && props.children}
      </AuthContext.Provider>
    </div>
  );
};
export default AuthProvider;
