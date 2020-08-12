import React from 'react';
import Heading from '../util/Heading';
import { Container, Row, Col } from "react-bootstrap";
import style from './css/Skills.module.scss';

const Skills = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <Container className={style.Skills}>
                <Row>
                    <Heading text='Skills' />
                </Row>
                <Row className={style.Container}>
                    <Col lg={6} className={style.Left}>
                    </Col>
                    <Col lg={6} className={style.Right}>
                        adasdasdasdsa
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;
