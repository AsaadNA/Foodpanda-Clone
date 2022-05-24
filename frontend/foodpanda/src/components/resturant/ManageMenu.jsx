import React, { useContext } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import { ResturantContext } from "../Contexts/ResturantContext";

const ManageMenu = () => {
  const { Items, setItems } = useContext(ResturantContext);

  return (
    <Container className="mt-5">
      <h3 className="mb-4" style={{ textDecoration: "underline" }}>
        Manage your resturant's menu
      </h3>
      <Row>
        <Col md={4} className="register-card">
          <Row>
            <Form>
              <Form.Group
                className="mt-3"
                controlId="category"
                style={{ textAlign: "left" }}
              >
                <Form.Label style={{ marginLeft: "5px", fontWeight: "bold" }}>
                  Category Name
                </Form.Label>
                <Form.Control type="text" placeholder="Ex. Drinks" />
              </Form.Group>
              <Form.Group className="mt-3 d-flex justify-content-around">
                <Button className="crud-button">Add Category</Button>
                <Button className="crud-button">Update Category</Button>
                <Button className="crud-button">Delete Category</Button>
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <Form>
              <Form.Group
                className="mt-3"
                controlId="itemName"
                style={{ textAlign: "left" }}
              >
                <Form.Label style={{ marginLeft: "5px", fontWeight: "bold" }}>
                  Item Name
                </Form.Label>
                <Form.Control type="text" placeholder="Ex. Pepsi" />
              </Form.Group>
              <Form.Group
                className="mt-3"
                controlId="itemName"
                style={{ textAlign: "left" }}
              >
                <Form.Label style={{ marginLeft: "5px", fontWeight: "bold" }}>
                  Item Price
                </Form.Label>
                <Form.Control type="text" placeholder="Ex. 70" />
              </Form.Group>
              <Form.Group
                className="mt-3"
                controlId="itemPrice"
                style={{ textAlign: "left" }}
              >
                <Form.Label style={{ marginLeft: "5px", fontWeight: "bold" }}>
                  Category
                </Form.Label>
                <Form.Control type="text" placeholder="Ex. Drinks" />
              </Form.Group>

              <Form.Group className="mt-3 d-flex justify-content-around">
                <Button className="text-light crud-button">Add Item</Button>
                <Button className="crud-button">Update Item</Button>
                <Button className="crud-button text-light">Delete Item</Button>
              </Form.Group>
            </Form>
          </Row>
        </Col>
        <Col md={8}>
          <Table
            striped
            bordered
            hover
            responsive
            style={{ textAlign: "left", padding: "5px" }}
          >
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {Items.map((Item) => {
                return Item.items.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.itemName}</td>
                      <td>{item.itemPrice}</td>
                      <td>{Item.categoryName}</td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageMenu;
