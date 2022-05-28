import React, { useContext } from "react";
import { ResturantContext } from "../Contexts/ResturantContext";
import { useParams } from "react-router";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const RestaurantMenu = () => {
  let { restaurantName } = useParams();
  const { Items } = useContext(ResturantContext);
  console.log(Items);
  return (
    <Container className="mt-3">
      <h3>{restaurantName}</h3>
      <p>You can order the following items availible in the menu</p>
      {Items.map((item) => {
        if (item.items.length > 0) {
          return (
            <Row key={item._id} style={{ textAlign: "left" }}>
              <p
                style={{ fontSize: "20px", fontWeight: "bold" }}
                className="mt-2"
              >
                {item.categoryName}
              </p>
              {item.items.map((dish) => {
                return (
                  <Col md={3} className="mt-2">
                    <Card style={{ width: "18rem" }} key={dish._id}>
                      <Card.Img
                        variant="top"
                        class="p-2"
                        src="https://www.nicepng.com/png/full/123-1230120_pizza-hut-logo-png-logo-pizza-hut-2017.png"
                      />
                      <Card.Body>
                        <Card.Title>{dish.itemName}</Card.Title>
                        <Card.Text>{dish.itemDescription}</Card.Text>
                        <Card.Text>Rs {dish.itemPrice}</Card.Text>
                        <Button
                          variant="primary"
                          className="form-button"
                          style={{ width: "100%" }}
                        >
                          Add to cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          );
        } else {
          return null;
        }
      })}
    </Container>
  );
};

export default RestaurantMenu;
