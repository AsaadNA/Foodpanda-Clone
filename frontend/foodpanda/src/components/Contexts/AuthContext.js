import React, { useState, createContext } from "react";
import axios from "../Api/Api";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setuserType] = useState(null);
  const [loading, setloading] = useState(false);

  const logout = () => {
    console.log("logout");
    axios
      .get("/api/auth/logout/")
      .then((response) => {
        // let token = response.data.token;
        // console.log("==== " + token);
        // localStorage.setItem("SavedToken", "Bearer " + token);
        console.log(response);
        localStorage.removeItem("userType");
        localStorage.removeItem("currentUser");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginResturant = (email, password, loginRoute) => {
    axios
      .post(loginRoute, {
        email: email,
        password: password,
      })
      .then((response) => {
        // let token = response.data.token;
        // console.log("==== " + token);
        // localStorage.setItem("SavedToken", "Bearer " + token);
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
  const loginCustomer = (username, password, loginRoute) => {
    axios
      .post(loginRoute, {
        username: username,
        password: password,
      })
      .then((response) => {
        // let token = response.data.token;
        // console.log("==== " + token);
        // localStorage.setItem("SavedToken", "Bearer " + token);
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
