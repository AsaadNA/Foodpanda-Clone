import React, { useContext } from "react";
import { Nav, Navbar, Container, Button, NavLink } from "react-bootstrap";
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
          <LinkContainer to="/customer/manage" className="Navlink">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/customer/manage/order" className="Navlink">
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/customer/manage/status" className="Navlink">
            <Nav.Link>View Orders</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/customer/manage/cart" className="Navlink">
            <Nav.Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-1"
                width="24"
                height="24"
              >
                <path
                  fill="#f7f7f7"
                  d="M12 2.75a4.75 4.75 0 014.744 4.5h3.103a1 1 0 01.99 1.141l-1.714 12a1 1 0 01-.99.859H5.867a1 1 0 01-.99-.859l-1.714-12a1 1 0 01.99-1.141h3.103A4.75 4.75 0 0112 2.75zm5.559 14.75H6.44a.4.4 0 00-.396.457l.208 1.45a.4.4 0 00.396.343H17.35a.4.4 0 00.396-.343l.208-1.45a.4.4 0 00-.396-.457zm1.25-8.75H5.19a.4.4 0 00-.396.457l.922 6.45a.4.4 0 00.396.343h11.775a.4.4 0 00.396-.343l.922-6.45a.4.4 0 00-.396-.457zM12 4.25a3.251 3.251 0 00-3.193 2.638.305.305 0 00.3.362h5.796a.297.297 0 00.292-.35A3.251 3.251 0 0012 4.25z"
                ></path>
              </svg>
            </Nav.Link>
          </LinkContainer>
          <Button onClick={logout} className="logout-button">
            Logout
          </Button>
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
