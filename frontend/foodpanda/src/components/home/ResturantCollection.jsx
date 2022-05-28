import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import { Card, Nav } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { ResturantContext } from "../Contexts/ResturantContext";
import { LinkContainer } from "react-router-bootstrap";

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

const ResturantCollection = ({ showMenu }) => {
  const { Resturants, setResturants, fetchItems } =
    useContext(ResturantContext);

  return (
    <div>
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
                    <span style={{ fontSize: "15px" }}>
                      {Resturant.cuisineType}
                    </span>
                  </Card.Title>
                  {showMenu ? (
                    <>
                      <hr></hr>
                      <Card.Text>
                        {Resturant.operatingArea}
                        <p>
                          <strong>Rs. {Resturant.operatingFees}</strong>{" "}
                          Delivery fee
                        </p>
                      </Card.Text>
                      <LinkContainer
                        to={Resturant.restaurantName}
                        className="btn-primary order-button text-center"
                        onClick={() => {
                          window.localStorage.setItem(
                            "restaurantName",
                            Resturant.restaurantName.toString()
                          );
                          fetchItems();
                        }}
                      >
                        <Nav.Link>View Restaurant</Nav.Link>
                      </LinkContainer>
                    </>
                  ) : null}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ResturantCollection;
