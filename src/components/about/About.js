import React from 'react';
import style from './css/About.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from '../../resources/images/avatar.JPG';
import Heading from "../util/Heading";
import AboutContent from './AboutContent';

const About = () => {

    return (
        <Container className={style.About} style={{ minHeight: '200vh' }}>
            <Row>
                <Heading text='about' />
            </Row>
            <Row>
                <Col md={4} className='p-3'>
                    <img className={style.AboutAvatar} src={Avatar} alt='Toan Nguyen' />
                </Col>
                <Col md={8}>
                    <AboutContent />
                </Col>
            </Row>
        </Container>
    );

}

export default About;
