// src/components/Cart.js

import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import CartItem from './CartItem';
import Pago from './Pago';
import { useHistory, Link } from 'react-router-dom';
const Cart = ({ items, onRemove }) => {

  return (
    <Container className="my-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      <Row className="mb-3">
        <Col xs={3}><h5>Imagen</h5></Col>
        <Col xs={3}><h5>Producto</h5></Col>
        <Col xs={2}><h5>Cantidad</h5></Col>
        <Col xs={2}><h5>Precio</h5></Col>
        <Col xs={2}></Col>
      </Row>
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
      <Row className="mt-4">
        <Col xs={12} className="d-flex justify-content-end">
        <button>
        <Nav.Link as={Link} to="/Pago" className="btn btn-success bg-danger">Proceder al Pago</Nav.Link>
     
        </button>
          </Col>
      </Row>
    </Container>
  );
};

export default Cart;
