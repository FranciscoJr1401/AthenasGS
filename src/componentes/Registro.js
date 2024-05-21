import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegisImage from '../img/maxresdefault (1).jpg'; // Importa la imagen desde la ruta correspondiente

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center m-1" style={{ minHeight: '70vh' }}>
      <Row>
        <Col md={{ span: 15, offset: 3 }}>
          <div className="bg-dark rounded p-5 pr-4">
            <h2 className="mb-4 text-light">Registro de Usuario</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label className='text-light'>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formUsername">
                <Form.Label className='text-light'>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre de usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label className='text-light'>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label className='text-light'>Confirmar Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirma tu contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="danger" type="submit" className="w-100 mt-4">
                Registrarse
              </Button>
            </Form>
            <h5 className='text-white d-flex justify-content-center align-items-center mt-4'>¿Ya tienes cuenta?</h5>
            <Nav.Link as={Link} to="/Login" className="nav-link-with-space text-light d-flex justify-content-center align-items-center text-decoration-underline">Iniciar Sesión</Nav.Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;