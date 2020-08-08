import React from 'react';
import Heading from '../util/Heading';
import { Container, Row } from "react-bootstrap";
import style from './css/Skills.module.scss';

const Skills = () => {
    return (
        <Container className={style.Skills}>
            <Row>
                <Heading text='Skills' />
            </Row>
        </Container>
    );
}

export default Skills;
