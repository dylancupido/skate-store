import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import storeItems from "./storeItems";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/store.css";

const StorePage = () => {
  const dispatch = useDispatch();

  const groupedItems = storeItems.reduce((groups, item) => {
    const group = groups[item.group] || [];
    group.push(item);
    groups[item.group] = group;
    return groups;
  }, {});

  const handleBuyNow = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Container fluid className="store-container">
      {Object.keys(groupedItems).map((group) => (
        <div key={group}>
          <h2 className="group-title">{group}</h2>
          <Row>
            {groupedItems[group].slice(0, 10).map((item) => (
              <Col md={4} lg={3} key={item.id} className="mb-4">
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
