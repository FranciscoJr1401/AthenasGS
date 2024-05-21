import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Envelope, Facebook, Instagram, Whatsapp, PersonFill } from 'react-bootstrap-icons';

function SocialFooter() {
  return (
    <footer bg="danger" expand="lg" className="container">
    <div className="d-flex justify-content-center w-100">
      <Nav className="mr-4 d-flex flex-wrap">
        <Nav.Link href="#email"><Envelope size={24} /></Nav.Link>
        <Nav.Link href="#facebook"><Facebook size={24} /></Nav.Link>
        <Nav.Link href="#instagram"><Instagram size={24} /></Nav.Link>
        <Nav.Link href="#whatsapp"><Whatsapp size={24} /></Nav.Link>
      </Nav>
      
    </div>
  </footer>
  );
}

export default SocialFooter;
