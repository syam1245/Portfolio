import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function Experience() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>MERN Stack Dev</Accordion.Header>
        <Accordion.Body>

        Exploring the MERN stack stemmed from its unified JavaScript foundation.<br />
         This comprehensive amalgamation of MongoDB, Express.js, React.js, and Node.js provided a streamlined continuum for complete development using a single language. <br />
         Its allure lay in the efficiency, scalability, and potential for crafting dynamic, full-stack web solutions. Embracing MERN expanded my skill set, empowering the creation of diverse, efficient, and holistic applications. <br />
         This journey aligns seamlessly with my ambition to excel in a contemporary, encompassing technology stack, elevating my capabilities in the realm of software development. <br />

         <br />
          <Row>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.DiNIG4Bfpm65_wwXf_JwMAHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  style={{ height: '300px', objectFit: 'cover' }}/>
                <Card.Body>
                  <Card.Title>MongoDB</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.9zN9M5IW0FwVUWiO-xOoMAHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  style={{ height: '300px', objectFit: 'cover' }}/>
                <Card.Body>
                  <Card.Title>NodeJS</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col xs={3} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.25vSXGJsvi1u3JIjcfvfNQHaEo?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  style={{ height: '300px', objectFit: 'cover' }}/>
                <Card.Body>
                  <Card.Title>JavaScript</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>IT infrastructure Admin</Accordion.Header>
        <Accordion.Body>
        Within IT infrastructure administration, my expertise spans various competencies. <br />
        I specialize in optimizing and maintaining critical hardware and software components, ensuring their peak performance. Proficiency in network engineering allows me to adeptly craft and manage robust network architectures.<br />
        I excel in troubleshooting intricate issues, providing meticulous desktop and laptop hardware maintenance. Fortifying system stability and security, I combine in-depth IT protocol knowledge with adept problem-solving skills, ensuring seamless operations across diverse domains.<br />
        My dedication lies in maintaining, securing, and optimizing IT infrastructures to facilitate smooth, efficient, and secure organizational functions.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Projects</Accordion.Header>
        <Accordion.Body>
        <>
  <h3>Weather Dashboard</h3>
  <p>
    This is a weather dashboard that allows you to search for weather outlook
    for multiple cities so travelers can plan a trip accordingly. The app
    retrieves weather data using the OpenWeather API and localStorage is used to
    store persistent data. The user can search to view weather outlook for
    multiple cities so travelers can plan a trip accordingly.
  </p>
  <h3> Features</h3>
  <p>
    - Search for weather outlook for multiple cities <br />
    - Retrieve weather data using the OpenWeather API
    <br />- Store persistent data using localStorage
  </p>
</>

<>
  <h2> Segment Extraction with FFmpeg</h2>
  <p>
    This is a video segment extraction project that allows you to extract and
    encode video segments based on start and end times of video recordings from
    a set of video files such as those produced by GoPro devices and similar.
    The output is a single encoded video file.
  </p>
  <h2>Features</h2>
  - Extract and encode video segments based on start and end
  times of video recordings<br />
  - Uses FFmpeg to extract and encode video segments
  -Works with video files produced by GoPro devices and similar
</>


        </Accordion.Body>
      </Accordion.Item>

    </Accordion>


  );
}

export default Experience;
