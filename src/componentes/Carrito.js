import React, { useState } from 'react';
import Carrusel from '../componentes/carrusel';
import CartItem from '../componentes/CartItem';
import Cart from '../componentes/Cart';
import { Form, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, Routes } from 'react-router-dom';
import Pago from '../componentes/Pago';
import 'bootstrap/dist/css/bootstrap.min.css';


const initialItems = [
  {
    id: 1,
    name: 'Producto 1',
    quantity: 2,
    price: '$10.00',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Producto 2',
    quantity: 1,
    price: '$20.00',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Producto 3',
    quantity: 3,
    price: '$30.00',
    image: 'https://via.placeholder.com/150'
  }
];
const Carrito = () => {
  const [items, setItems] = useState(initialItems);

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  return (
    <div>
      <Cart items={items} onRemove={handleRemove} />
      
    </div>
  );

};
export default Carrito;