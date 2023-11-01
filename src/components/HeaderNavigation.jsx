import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function HeaderNavigation() {
  return (
    <div>
      <Navbar expand='xxl' bg="dark" variant="dark" style={{ padding: '20px 0' }}>
        <Container>
          <Navbar.Brand style={{ display: 'flex', alignItems: 'center', fontSize: '2.5rem', paddingTop: '20px', paddingBottom: '20px' }}>
            <img src="https://shorturl.at/bnBP6" alt="Avatar" style={{ width: '160px', height: '180px', borderRadius: '50%', marginRight: '15px' }} />
            Syam Pushpan
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
              <a href="https://github.com/syam1245" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/syam-pushpan/" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>
                <FaLinkedin size={30} />
              </a>
              {/* Add more social media icons/links as needed */}
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNavigation;
