// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col, Button, Nav, Form, Carousel, InputGroup, FormControl } from 'react-bootstrap';
import './App.css';
import Login from './componentes/Login';
import Home from './componentes/Home';
import Registro from './componentes/Registro';
import AcercaDe from './componentes/AcercaDe';
import Tienda from './componentes/Tienda';
import Carrito from './componentes/Carrito';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, Routes } from 'react-router-dom';
import Pago from './componentes/Pago';
import Carrusel from './componentes/carrusel';
import { PersonFill, Search } from 'react-bootstrap-icons';
import { CartFill } from 'react-bootstrap-icons';
import SocialFooter from './componentes/SocialFooter';
import Logo from './img/Logo Ale.png';
function App() {
  return (
    <BrowserRouter>
      <div className="App  ">
        
      <Navbar bg="white" expand="lg" className="p-4">
      <Container>
      <Nav.Link as={Link} to="/Home" className="mr-2"><img src={Logo} alt="logo" className="m-1" style={{ width: '190px', height: '150px' }} />
    
</Nav.Link>
          
      <Navbar bg="white" variant="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Home" className="nav-link-with-space ">Home</Nav.Link>
          <Nav.Link as={Link} to="/Tienda" className="nav-link-with-space">Tienda</Nav.Link>            
          <Nav.Link as={Link} to="/AcercaDe" className="nav-link-with-space">Acerca de</Nav.Link>
          <Nav.Link as={Link} to="/Registro" className="nav-link-with-space">Registro</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>

        <Form inline className="ml-auto">
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Buscar..."
          className="mr-sm-2"
        />
        <InputGroup.Text className="icon-container">
          <Search size={24} />
        </InputGroup.Text>
        <InputGroup.Text className="icon-container">
        <Nav.Link as={Link} to="/Carrito"><CartFill size={27} color='red' /></Nav.Link>
    
    
        </InputGroup.Text>
        
        <InputGroup.Text className="icon-container">
        <Nav.Link as={Link} to="/Login"><PersonFill size={27} /> Login</Nav.Link>

        
        </InputGroup.Text>
      </InputGroup>
    </Form>
        
        
      </Container>
    </Navbar>
   
   
 

     
    </div>
    

 


        <Routes>
            <Route path='login' element={ <Login /> }></Route>
            <Route path='Home' element={ <Home /> }></Route>
            <Route path='AcercaDe' element={ <AcercaDe /> }></Route>
            <Route path='Registro' element={ <Registro /> }></Route>
            <Route path='Tienda' element={ <Tienda /> }></Route>
            <Route path='Carrito' element={ <Carrito /> }></Route>
            <Route path='Pago' element={ <Pago /> }></Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;

