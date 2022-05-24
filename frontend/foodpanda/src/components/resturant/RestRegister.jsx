import React from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const RestRegister = () => {
  return (
    <Container className="d-flex flex-column  justify-content-center align-items-center">
      <Row>
        <Col md="6" className="mt-2">
          <div className="mt-5 d-flex flex-column  justify-content-center align-items-center">
            <div className="register-card">
              <h4 style={{ textAlign: "center", marginTop: "10px" }}>
                Welcome!
              </h4>
              <p style={{ textAlign: "center" }}>Register your resturant</p>
              <Form style={{ textAlign: "left", marginTop: "10px" }}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Resturant Name</Form.Label>
                      <Form.Control type="text" placeholder="Resturant Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                      <Form.Text className="text-muted">
                        We'll never share this with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Operating Area</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option disabled>Select Area</option>
                        <option value="Malir Cantt">Malir Cantt</option>
                        <option value="P.E.C.H.S">P.E.C.H.S</option>
                        <option value="Clifton">Clifton</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Type of Cusine</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option disabled>Select Cusine</option>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Italian">Italian</option>
                        <option value="Desi">Desi</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Delivery Charges</Form.Label>
                      <Form.Control type="number" placeholder="Rs. 65" />
                      <Form.Text className="text-muted">
                        You change change this later.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Button
                    variant="primary"
                    type="submit"
                    className="form-button w-100"
                  >
                    Register
                  </Button>
                </Row>
              </Form>
            </div>
          </div>
        </Col>
        <Col md="6" className="mt-2">
          <img
            src="https://www.elluminatiinc.com/wp-content/uploads/2020/05/foodpan/foodpan2.png"
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
            Do you want to have an customer account?{" "}
            <LinkContainer to="/signup">
              <Nav.Link>
                <span style={{ color: "#D70F64" }}>Click Here To Register</span>
              </Nav.Link>
            </LinkContainer>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RestRegister;
