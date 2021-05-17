import React from 'react';
import './Services.css';
import HeroSection from '../../HeroSection';
import { serviceObjOne } from './Data';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { AiFillVideoCamera, AiOutlineCheck } from "react-icons/ai";
import { GrMonitor } from "react-icons/gr";
import { GiRingingAlarm, GiDrill } from "react-icons/gi";
import ListGroup from 'react-bootstrap/ListGroup'

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

<Container className="pt-5 pb-5">
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
  </Card>
  <Card>
  <div className="icon_container">
    <GiDrill />
  </div>
    <Card.Body>
      <Card.Title>Home Improvement</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>

</CardGroup>


    </Col>
    
  </Row>

  <Row >
  <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
  <Tab eventKey="home" title="Home">

  </Tab>
  <Tab eventKey="profile" title="Profile">

  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
 
  </Tab>
</Tabs>


<Container>
<Fade>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row className="pt-5 pb-5">
    <Col xs={12} md={8}>
     <h1> Choose us to complete the job! </h1>
     <p> Featuring industry-leading 4K (8 megapixel) resolution recording, this security camera system from Lorex will bring a whole new level of detail to your monitoring. It includes an 8-channel Fusion Series Network Video Recorder (NVR) and four 4K IP bullet security cameras. Whether you are looking to protect your home or small business, this powerful security camera system will help you secure the things that matter most.</p>
    </Col>
    <Col xs={6} md={4}>
     <img className="img-50" src="https://res.cloudinary.com/jessica-leverett/image/upload/v1621243833/undraw_QA_engineers_dg5p_fnkxbt.svg" alt="security cameras near me" />
    </Col>
  </Row>
  </Fade>
  <Fade>
  <Row className="pt-5 pb-5">
  <Col xs={6} md={4} >
     <img className="img-50" src="https://res.cloudinary.com/jessica-leverett/image/upload/v1621243833/undraw_Team_goals_re_4a3t_hjgnjp.svg" alt="security cameras near me" />
    </Col>
    <Col xs={12} md={8}>
     <h1>Fair Pricing & Quality Standards </h1>
     <p>There are many reasons to purchase security for your property. We all want to keep our families and our possessions safe. But why choose Lorex? Well, Lorex has over 30 years of experience in video surveillance technology. They offer top-of-the-line wired, wireless, and wire-free security systems, as well as feature-rich stand-alone Smart Wi-Fi monitoring cameras. They also offer exclusive technologies such as Color Night Vision, Active Deterrence, and Smart Motion Detection.</p>
      <br></br>    
     <p className="flex">
     <b>If thats not enough, here are some more reasons: </b><br></br><br></br>
     <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item> <AiOutlineCheck /> No Monthly Fees</ListGroup.Item>
        <ListGroup.Item><AiOutlineCheck /> 30 Day Guarantee</ListGroup.Item>
        <ListGroup.Item><AiOutlineCheck /> Free Shipping & Returns</ListGroup.Item>
        <ListGroup.Item><AiOutlineCheck /> Best Price Guarantee</ListGroup.Item>
        <ListGroup.Item><AiOutlineCheck /> 1 year Warranty</ListGroup.Item>
      </ListGroup>
    </Card> 
      </p> 
    
    </Col>
  </Row>
  </Fade>

  <Row className="pt-5 pb-5">
    <Col xs={12} md={8}>
     <h1> Protection you can trust  </h1>
     <p> Whether you’re home or away, we make smart home simple. With a Smart Home Security System and the FREEs mobile app, you have remote access and control of everything from lights, locks, and thermostats, to your garage door, cameras, and, of course, your security system.</p>
    </Col>
    <Col xs={6} md={4}>
     <img className="img-50" src="https://res.cloudinary.com/jessica-leverett/image/upload/v1621245848/undraw_Security_on_re_e491_c3cc5q.svg" alt="security cameras near me" />
    </Col>
  </Row>
  <Col lg={12} className="QUOTE text-center">Reach out today and get a FREE quote <a href="tel:7862873326"> 786-287-3326 </a></Col>
  </Container>





  </Row>
</Container>



    </>
  );
}

export default Services;