// src/components/ProductList.js

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del Producto 1',
    price: '$10.00',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del Producto 2',
    price: '$20.00',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del Producto 3',
    price: '$30.00',
    image: 'https://via.placeholder.com/150'
  }
];

const ProductList = () => {
  return (
    
    <Container className="my-4">
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
