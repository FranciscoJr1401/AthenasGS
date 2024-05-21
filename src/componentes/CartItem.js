// src/components/CartItem.js

import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const CartItem = ({ item, onRemove }) => {
  return (
    <Row className="mb-3">
      <Col xs={3}>
        <img src={item.image} alt={item.name} className="img-fluid" />
      </Col>
      <Col xs={3}>
        <h5>{item.name}</h5>
      </Col>
      <Col xs={2}>
        <p>{item.quantity}</p>
      </Col>
      <Col xs={2}>
        <p>{item.price}</p>
      </Col>
      <Col xs={2}>
        <Button variant="danger" onClick={() => onRemove(item.id)}>Eliminar</Button>
      </Col>
    </Row>
  );
};

export default CartItem;
