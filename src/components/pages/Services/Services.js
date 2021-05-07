import React from 'react';
import './Services.css';
import HeroSection from '../../HeroSection';
import { serviceObjOne } from './Data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { AiFillVideoCamera } from "react-icons/ai";
import { GrMonitor } from "react-icons/gr";
import { GiRingingAlarm, GiDrill } from "react-icons/gi";


function Services() {
  return (
    <>
    <Fade>
      <HeroSection {...serviceObjOne} />
    </Fade>

    <Container>
    <h1> Let the security experts take care over you and your loved ones.</h1>
    </Container>
    <div className="Service_top_img">
        <div>
        <img className="img-50" src="https://images.unsplash.com/photo-1612173562294-8a977ef9d895?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="security cameras near me" />
        </div>
        <div>
        <img className="img-50" src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="security cameras near me" />
        </div>
    </div>

<Container>
  <Row>
    <Col xs={12}>
        <CardGroup>
        <Card>
        <div className="icon_container">
            <AiFillVideoCamera /> 
        </div>
        <Card.Body>
        <Card.Title>Security Cameras</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
     </Card>
    <Card>
    <div className="icon_container">
        <GiRingingAlarm />
    </div>
    <Card.Body>
      <Card.Title>Alarm Monitoring</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <div className="icon_container">
        <GrMonitor />
    </div>
    <Card.Body>
      <Card.Title>TV. Mounting </Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <div className="icon_container">
    <GiDrill />
  </div>
    <Card.Body>
      <Card.Title>HandyMan Services</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

</CardGroup>


    </Col>
    <Col lg={12} className="QUOTE">REACH OUT TODAY AND GET A PERSONALIZED QUOTE <a href="tel:7862873326"> 786-287-3326 </a></Col>
  </Row>

  <Row>
  <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
  <Tab eventKey="home" title="Home">

  </Tab>
  <Tab eventKey="profile" title="Profile">

  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
 
  </Tab>
</Tabs>



  </Row>
</Container>
    </>
  );
}

export default Services;