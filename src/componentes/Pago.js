import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el pago
    console.log('Número de tarjeta:', cardNumber);
    console.log('Fecha de vencimiento:', expiryDate);
    console.log('CVV:', cvv);
  };

  return (
<section className='bg-danger p-5'>
<Container>
      <Row className="justify-content-center  ">
        <Col md={6}>
          <div className="payment-form bg-light p-5 ">
            <h2>Realizar Pago</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="cardNumber">
                <Form.Label>Número de tarjeta</Form.Label>
                <Form.Control
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="expiryDate">
                <Form.Label>Fecha de vencimiento</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="cvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Pagar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
</section>
  );
};

export default PaymentPage;