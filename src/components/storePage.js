import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import storeItems from "./storeItems";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/store.css";

// StorePage component definition
const StorePage = () => {
  // Initialize the dispatch function
  const dispatch = useDispatch();

  // Group store items by their group property
  const groupedItems = storeItems.reduce((groups, item) => {
    const group = groups[item.group] || [];
    group.push(item);
    groups[item.group] = group;
    return groups;
  }, {});

  // Handle the 'Buy Now' button click
  const handleBuyNow = (item) => {
    // Dispatch the addToCart action with the selected item
    dispatch(addToCart(item));
  };

  return (
    <Container fluid className="store-container">
      {/* Loop through each group of items */}
      {Object.keys(groupedItems).map((group) => (
        <div key={group}>
          {/* Group title */}
          <h2 className="group-title">{group}</h2>
          <Row>
            {/* Loop through each item in the group and display a card */}
            {groupedItems[group].slice(0, 10).map((item) => (
              <Col md={4} lg={3} key={item.id} className="mb-4 card-container">
                <Card className="item-card">
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                    <Button
                      className="btn-buy-now"
                      onClick={() => handleBuyNow(item)}
                    >
                      Buy Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default StorePage;
