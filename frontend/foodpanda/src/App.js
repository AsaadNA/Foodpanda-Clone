import "./App.css";
import Homepage from "./components/Homepage";
import Login from "./components/customer/Login";
import Register from "./components/customer/Register";
import Navigation from "./components/navigation/Navigation";
import RestRegister from "./components/resturant/RestRegister";
import RestLogin from "./components/resturant/RestLogin";
import ManageOrders from "./components/resturant/ManageOrders";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
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
            path="/resturant/manageOrders"
            element={
              <PrivateRoute
                auth={{ isAuthenticated: false }}
                redirect="/resturant/login"
              >
                <ManageOrders></ManageOrders>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
