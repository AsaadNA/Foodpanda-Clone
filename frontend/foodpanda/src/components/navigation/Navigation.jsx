import React, { useContext } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../Contexts/AuthContext";
import "../../App.css";

const Navigation = ({ currentUser, userType }) => {
  const { logout } = useContext(AuthContext);

  const renderLinks = (currentUser, userType, logout) => {
    if (currentUser === "true" && userType === "restaurant") {
      return (
        <>
          <LinkContainer to="/resturant/manage" className="Navlink">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resturant/manage/orders" className="Navlink">
            <Nav.Link>Manage Orders</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resturant/manage/menu">
            <Nav.Link>Manage Menu</Nav.Link>
          </LinkContainer>
          <Button onClick={logout} className="logout-button">
            Logout
          </Button>
        </>
      );
    } else if (currentUser === "true" && userType === "customer") {
      return (
        <>
          <LinkContainer to="/resturant/manage" className="Navlink">
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resturant/manage/orders" className="Navlink">
            <Nav.Link>View Orders</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resturant/manage/menu">
            <Nav.Link>Logout</Nav.Link>
          </LinkContainer>
        </>
      );
    } else {
      return (
        <>
          <LinkContainer to="/" className="Navlink">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login" className="Navlink">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
        </>
      );
    }
  };
  return (
    <Navbar expand="lg" className="Navbar" variant="dark">
      <Container>
        <Navbar.Brand>Food Panda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto justify-content-end"
            style={{ width: "100%" }}
          >
            {renderLinks(currentUser, userType, logout)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
