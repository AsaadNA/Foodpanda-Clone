import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Questions = [
  {
    id: 1,
    question: "What is foodpanda?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    question: "How can we order food through it?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    question: "Does foodpanda offers cashless payments?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    question: "What is the refund process?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Homepage = () => {
  const [Resturants, setResturants] = useState([]);

  const fetchResturants = async () => {
    await axios
      .get("http://localhost:4000/api/restaurant")
      .then(function (response) {
        const resturants = response.data.data;
        setResturants(resturants);
        console.log(resturants);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchResturants();
  }, []);

  return (
    <>
      <img
        className="d-block w-100"
        src="https://www.deliveryhero.com/wp-content/uploads/2021/08/foodpanda-Germany-expansion-1200x628.png"
        alt="First slide"
      />
      <h5 className="text-light">First slide label</h5>
      <p className="text-light">
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </p>
      <Container className="mb-3 homecontainer">
        <Row>
          <Col md={12}>
            <div>
              <h4>
                Browse through our wide-range of resturants all over karachi
              </h4>
              <Row xs={1} md={12} className="g-4 m-3">
                <Carousel responsive={responsive} style={{ width: "100%" }}>
                  {Resturants.map((Resturant) => {
                    return (
                      <div key={Resturant._id}>
                        <Card className="card" style={{ margin: "10px" }}>
                          <Card.Img
                            variant="top"
                            src="https://images.deliveryhero.io/image/fd-pk/LH/w2uc-listing.jpg"
                            height={250}
                          />
                          <Card.Body className="cardBody">
                            <Card.Title>
                              {Resturant.restaurantName}
                              <br></br>
                              <span style={{ fontSize: "15px" }}>Chinese</span>
                            </Card.Title>
                            <Card.Text>
                              {Resturant.operatingArea}
                              <p>
                                <strong>Rs. 67</strong> Delivery fee
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })}
                </Carousel>
              </Row>
            </div>
          </Col>
          <Col md={12} className="AccordationCollection">
            <h4>Frequently Asked Question</h4>
            <Accordion defaultActiveKey="0">
              <Row className="d-flex flex-column justify-content-center align-items-center">
                {Questions.map((Question) => {
                  return (
                    <Col
                      md={12}
                      style={{ maxWidth: "800px" }}
                      key={Question.id}
                    >
                      <Accordion.Item eventKey={Question.id}>
                        <Accordion.Header className="AccordationHeader">
                          {Question.question}
                        </Accordion.Header>
                        <Accordion.Body>{Question.answer}</Accordion.Body>
                      </Accordion.Item>
                    </Col>
                  );
                })}
              </Row>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
