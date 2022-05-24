import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResturantCollection from "./ResturantCollection";
import FAQ from "./FAQ";
import { Navigate } from "react-router";

const Homepage = () => {
  useEffect(() => {
    if (
      localStorage.getItem("currentUser") &&
      localStorage.getItem("userType")
    ) {
      if (localStorage.getItem("userType") === "restaurant") {
        <Navigate to="/resturant/manage"></Navigate>;
        window.location.href = "/resturant/manage";
      } else if (localStorage.getItem("userType") === "customer") {
        <Navigate to="/customer/manage"></Navigate>;
        window.location.href = "customer/manage";
      }
    }
  }, []);

  return (
    <>
      <img
        className="d-block w-100"
        src="https://www.deliveryhero.com/wp-content/uploads/2021/08/foodpanda-Germany-expansion-1200x628.png"
        alt="First slide"
      />
      <Container className="mb-3 homecontainer">
        <Row>
          <Col md={12}>
            <div>
              <h4 className="mt-5">
                Browse through our wide-range of resturants all over karachi
              </h4>
              <Row xs={1} md={12} className="g-4 m-3">
                <ResturantCollection></ResturantCollection>
              </Row>
            </div>
          </Col>
          <Col md={12} className="AccordationCollection">
            <h4 className="mb-3">Frequently Asked Question</h4>
            <FAQ></FAQ>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
