import React from 'react';
import Carrusel from '../componentes/carrusel';
import { Form, Button, Container, Row, Col, Nav,Card } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
function AcercaDe(){
    return (
      <section className="my-5 p-5 bg-danger">
        <h1 className="text-center my-5">Acerca de nosotros</h1>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="mb-5">
            <Card.Body>
              <Card.Title className="text-center">Misión</Card.Title>
              <Card.Text>
                Ser la plataforma líder que permita a nuestros clientes expresar sus sentimientos y emociones más profundas a través de regalos únicos y personalizados, creando momentos inolvidables. Nos esforzamos por ofrecer un servicio excepcional, productos de alta calidad, ser confiable para los clientes y crear una experiencia de compra sin igual en Panamá.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Visión</Card.Title>
              <Card.Text>
                Convertirnos en la marca más reconocida y confiable a nivel nacional en regalos personalizados, siendo pioneros en innovación y estableciendo los más altos estándares en diseño, materiales y procesos de personalización. Aspiramos a inspirar y facilitar la conexión humana a través de regalos significativos reduciendo el tiempo de compra de las personas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
           
      );
}

export default AcercaDe;