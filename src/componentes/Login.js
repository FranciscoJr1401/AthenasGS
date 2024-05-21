import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, Routes } from 'react-router-dom';
import loginImage from '../img/2.png'; // Importa la imagen desde la ruta correspondiente

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberUser, setRememberUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember User:', rememberUser);
  };

  return (
    <section className='m-1 d-flex justify-content-center align-items-center'>
      <Container className="m-1 d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <Row>
          <Col md={6} className="order-md-2">
            <img src={loginImage} alt="Login" className="img-fluid rounded" />
          </Col>
          <Col md={6} className="order-md-1">
            <div className="bg-dark rounded p-5 pr-4">
              <h2 className="mb-4 text-light">Bienvenido a Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                  <Form.Label className="text-light">User</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label className="text-light">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formRememberUser" className="text-light">
                  <Form.Check
                    type="checkbox"
                    label="Remember User"
                    checked={rememberUser}
                    onChange={(e) => setRememberUser(e.target.checked)}
                  />
                </Form.Group>
                <Button variant="danger" type="submit" className="w-100">
                  Log In
                </Button>
              </Form>
              <h5 className="text-white d-flex justify-content-center align-items-center mt-4">¿No tienes cuenta?</h5>
              <Nav.Link as={Link} to="/Registro" className="nav-link-with-space text-light d-flex justify-content-center align-items-center text-decoration-underline">
                Registro
              </Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginForm;