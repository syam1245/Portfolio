import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div style={{ backgroundColor: '#343a40', color: 'white', paddingTop: '20px' }}>
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column align-items-end">
            <h5>About Me</h5>
            <p>I'm Syam, an impassioned tech enthusiast from Kerala. My journey spans diverse facets of IT, ranging from hardware maintenance and network engineering to immersive explorations in the MERN stack and Python.
            Committed to refining my skills in MERN stack development and staying updated with evolving tech landscapes, I'm fueled by a relentless thirst for knowledge and an unwavering dedication to pushing the boundaries of technological possibilities.</p>
          </Col>
          <Col md={6} className="d-flex flex-column align-items-end">
            <h5>Contact</h5>
            <p>Email: syam1245@email.com</p>
            <p>Phone: +91-902048019</p>
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: '#212529', textAlign: 'center', padding: '10px' }}>
        <p>&copy; {new Date().getFullYear()} Syam's Portfolio</p>
      </div>
    </div>
  );
}

export default Footer;
