import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <>
         <HeroSection {...homeObjOne} />
         <HeroSection {...homeObjTwo} />
         <HeroSection {...homeObjThree} />
         <HeroSection {...homeObjFour} />
         <Container className="pt-5 pb-5">
             <Row>
                 <Col lg={12} className="QUOTE text-center">Reach out today and get a FREE quote <a href="tel:7862873326"> 786-287-3326 </a></Col>
            </Row>
         </Container>
        </>
    )
}

export default Home
