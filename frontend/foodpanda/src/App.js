import "./App.css";
import Homepage from "./components/home/Homepage";
import Login from "./components/customer/Login";
import Register from "./components/customer/Register";
import Navigation from "./components/navigation/Navigation";
import RestRegister from "./components/resturant/RestRegister";
import RestLogin from "./components/resturant/RestLogin";
import ManageHome from "./components/resturant/ManageHome";
import ManageOrders from "./components/resturant/ManageOrders";
import ManageMenu from "./components/resturant/ManageMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import { AuthContext, AuthProvider } from "./components/Contexts/AuthContext";
import { useContext, useEffect } from "react";

function App() {
  const { currentUser, userType, setCurrentUser, setuserType } =
    useContext(AuthContext);

  useEffect(() => {
    if (
      localStorage.getItem("currentUser") &&
      localStorage.getItem("userType")
    ) {
      setCurrentUser(localStorage.getItem("currentUser"));
      setuserType(localStorage.getItem("userType"));
    }
  }, [setCurrentUser, setuserType, currentUser, userType]);

  return (
    <Router>
      <div className="App">
        <Navigation currentUser={currentUser} userType={userType}></Navigation>
        <Container className="d-flex justify-content-center align-items-center"></Container>
        <Routes>
          <Route exact path="/" element={<Homepage></Homepage>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/signup" element={<Register> </Register>}></Route>
          <Route
            exact
            path="/resturant/signup"
            element={<RestRegister> </RestRegister>}
          ></Route>
          <Route
            exact
            path="/resturant/login"
            element={<RestLogin> </RestLogin>}
          ></Route>
          <Route
            path="/resturant/manage"
            element={
              <PrivateRoute
                auth={{ isAuthenticated: true }}
                redirect="/resturant/login"
              >
                <ManageHome></ManageHome>
              </PrivateRoute>
            }
          />
          <Route
            path="/resturant/manage/orders"
            element={
              <PrivateRoute
                auth={{ isAuthenticated: true }}
                redirect="/resturant/login"
              >
                <ManageOrders></ManageOrders>
              </PrivateRoute>
            }
          />
          <Route
            path="/resturant/manage/menu"
            element={
              <PrivateRoute
                auth={{ isAuthenticated: true }}
                redirect="/resturant/login"
              >
                <ManageMenu></ManageMenu>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
