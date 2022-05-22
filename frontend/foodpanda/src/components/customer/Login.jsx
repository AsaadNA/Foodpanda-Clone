import React, { useEffect, useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
const Login = () => {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();

  const { loginCustomer, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCustomer(
      Username,
      Password,
      "/api/auth/login/customer/",
      "/customer/manage"
    );
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/customer/manage");
    }
  }, [currentUser, navigate]);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Row>
        <Col md="6" className="mt-2">
          <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="login-card">
              <h4 style={{ textAlign: "center", marginTop: "10px" }}>
                Welcome!
              </h4>
              <p style={{ textAlign: "center" }}>Login to your account</p>
              <Form
                style={{ textAlign: "left", marginTop: "10px" }}
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="form-button w-100"
                >
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </Col>
        <Col md="6" className="mt-2">
          <img
            src="https://www.everydayonsales.com/wp-content/uploads/2020/04/Gong-Cha-Ramadan-Promotion-on-Food-Panda.jpg"
            height={300}
            width={300}
            style={{ marginTop: "60px" }}
            alt="display-logo"
          ></img>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p className="business-text">
            Do you have an bussiness account?{" "}
            <LinkContainer to="/resturant/login">
              <Nav.Link>
                <span style={{ color: "#D70F64" }}>Click Here To Login</span>
              </Nav.Link>
            </LinkContainer>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
