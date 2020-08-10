import React from 'react';
import { Container, Row } from "react-bootstrap";
import style from './css/Contact.module.scss';
import Heading from '../util/Heading';

const Contact = () => {
    return (
        <div className={style.ContactContainer}>
            <div className={style.Map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6062971.908096524!2d103.24658773287804!3d15.542648774724496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ-G6p24gVGjGoSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1597077948186!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen={true}
                    aria-hidden={false}
                    tabIndex="0"
                    title='map'
                >
                </iframe>
            </div>
            <div className={style.Background}></div>
            <Container className={style.Contact}>
                <Row>
                    <Heading text='Contact' />
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
