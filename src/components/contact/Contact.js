import React from 'react';
import { Container, Row } from "react-bootstrap";
import style from './css/Contact.module.scss';
import Heading from '../util/Heading';
import Map from './Map';

const Contact = () => {
    return (
        <div>
            <Map />
            <Container className={style.Contact}>
                <Row>
                    <Heading text='Contact' />

                </Row>
            </Container>
        </div>
    );
}

export default Contact;
