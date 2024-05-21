import React, { useState } from 'react';
import { Form, Label } from 'react-bootstrap';

const OrderFilter = () => {
  const [orderBy, setOrderBy] = useState('default');

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
    // Aquí puedes agregar la lógica para aplicar el filtro de ordenamiento según la opción seleccionada
    console.log('Opción seleccionada:', event.target.value);
  };

  return (
<Form.Group controlId="orderFilter" className="d-inline-block">
      <Form.Control
        as="select"
        size="sm"
        value={orderBy}
        onChange={(e) => setOrderBy(e.target.value)}
        className="custom-select custom-select-sm"
      >
        <option value="default">Orden por defecto</option>
        <option value="popularity">Popularidad</option>
        <option value="rating">Calificación media</option>
        <option value="latest">Las últimas</option>
        <option value="price-asc">Precio: bajo a alto</option>
        <option value="price-desc">Precio: alto a bajo</option>
      </Form.Control>
    </Form.Group>
  );
};

export default OrderFilter;