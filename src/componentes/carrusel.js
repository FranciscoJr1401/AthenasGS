import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/sponline_phone114_generated.jpg';
import img2 from '../img/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_.jpg';
import img3 from '../img/vecteezy_shopping-online-on-smartphone-and-new-buy-sale-promotion_7153463.jpg';

function Carrusel() {
  return (
    <Container fluid className="p-0">
      <Carousel interval={3000} controls={true} indicators={true}>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Carrusel;
