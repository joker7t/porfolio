import React from 'react';
import Heading from '../util/Heading';
import { Container, Row } from "react-bootstrap";
import style from './css/Works.module.scss';

const Works = () => {
    return (
        <Container className={style.Works}>
            <Row>
                <Heading text='Works' />
            </Row>
        </Container>
    );
}

export default Works;
