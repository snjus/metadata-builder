import React from 'react';
import { Navbar, Container,Image } from 'react-bootstrap';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <Navbar   expand="lg" style={{backgroundColor: '#0b0f19'}}>
    <Container fluid>
      <Navbar.Brand className="d-flex align-items-center">
        <div className={styles.header}>
        <Image
          src="./../img/hexagon.png"
          width="192"
          height="59"
          className="d-inline-block align-top mr-2"
          alt="Company Logo"
        />
        <span className="ml-2">GPT-Based Document Metadata Extraction</span>
        </div>
        
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
};
export default Header;