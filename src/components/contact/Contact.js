import React from 'react';
import { Container, Row } from "react-bootstrap";
import style from './css/Contact.module.scss';
import Heading from '../util/Heading';

const Contact = () => {
    return (
        <Container className={style.Contact}>
            <Row>
                <Heading text='Contact' />
            </Row>
        </Container>
    );
}

export default Contact;
