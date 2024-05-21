import React from 'react';
import Carrusel from '../componentes/carrusel';
import { Navbar, Container, Row, Col, Button, Nav, Form, Carousel, InputGroup, FormControl } from 'react-bootstrap';
import SocialFooter from '../componentes/SocialFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from '../componentes/ProductList';

function Home(){
    return (
        <div>
           <div className=''>
      
      <Carrusel/>
      </div>
      <section className="bg-danger">
    <Container className="p-5">
        <Row>
          <Col>
            <h5>Articulos</h5>
          </Col>
        </Row>
        <div>
      <ProductList />
    </div>
        
      </Container>
    </section>

    <footer bg="danger" expand="lg" className="pt-1">
          <SocialFooter/>
        </footer>


          
        </div>
      );
}

export default Home;