import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
  Modal,
} from "react-bootstrap";
import "../styles/cart.css";

// Cart component definition
const Cart = () => {
  // Get the cart items from the Redux store
  const cart = useSelector((state) => state.cart);

  // Calculate the total price of items in the cart
  const cartTotal = cart.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)),
    0
  );

  // State to manage the visibility of the shipping info modal
  const [show, setShow] = useState(false);

  // State to manage the selected shipping method
  const [shippingMethod, setShippingMethod] = useState("Select Shipping");

  // Function to handle closing the modal
  const handleClose = () => setShow(false);

  // Function to handle showing the modal
  const handleShow = () => setShow(true);

  // Function to handle selecting a shipping method from the dropdown
  const handleSelect = (eventKey) => {
    setShippingMethod(eventKey);
  };

  // Render the cart component
  return (
    <Container className="cart-container">
      <h2>Your Cart</h2>
      <Row>
        {cart.map((item) => (
          // Render each cart item as a card
          <Col md={4} lg={3} key={item.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="cart-summary">
        <h3>Total: R{cartTotal.toFixed(2)}</h3>
        {/* Dropdown for selecting shipping method */}
        <Dropdown onSelect={handleSelect} className="d-inline mx-2">
          <Dropdown.Toggle variant="secondary">
            Method: {shippingMethod}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Standard Shipping">
              Standard Shipping
            </Dropdown.Item>
            <Dropdown.Item eventKey="Express Shipping">
              Express Shipping
            </Dropdown.Item>
            <Dropdown.Item eventKey="Overnight Shipping">
              Overnight Shipping
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* Button to show shipping info modal */}
        <Button
          variant="info"
          onClick={handleShow}
          style={{ backgroundColor: "white", border: "black" }}
        >
          <img
            src="assets/question-sign.png"
            alt="info"
            style={{ width: "20px", height: "20px", backgroundColor: "white" }}
          />
        </Button>
      </div>

      {/* Modal to display shipping methods info */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Methods</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Standard Shipping</h5>
          <p>Delivery within 5-7 business days.</p>
          <h5>Express Shipping</h5>
          <p>Delivery within 2-3 business days.</p>
          <h5>Overnight Shipping</h5>
          <p>Delivery by next business day.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Cart;
