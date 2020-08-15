import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import style from './css/Contact.module.scss';
import Heading from '../util/Heading';
import { ReactComponent as ContactHeader } from "../../resources/images/contact/contact-header.svg";
import Flip from 'react-reveal/Flip';
import Reveal from 'react-reveal/Reveal';
import { TweenMax, Power2 } from 'gsap';

const Contact = () => {
    const formRef = useRef(null);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [notifyMessage, setNotifyMessage] = useState(false);

    const show = () => {
        TweenMax.from(
            formRef.current,
            1,
            { scale: 0.2, ease: Power2.easeInOut }
        )
    }

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={style.ContactContainer}>
            <ContactHeader />
            <Container className={style.Contact}>
                <Row>
                    <Heading text='Contact' />
                </Row>
                <span className={style.Email}>joker7nbt@gmail.com</span>
                <span className={style.Intro}>Let's do something together!</span>
                <Row className={style.Form}>
                    <Col md={5}>
                        <Reveal onReveal={() => show()}>
                            <Form className='mx-auto' ref={formRef} onSubmit={handleSubmit}>
                                <Form.Control
                                    type="name"
                                    required
                                    placeholder="Your name"
                                    name='name'
                                    value={contact.name}
                                    onChange={handleChange}
                                />
                                <Form.Control
                                    type="email"
                                    required
                                    placeholder="Enter email"
                                    name='email'
                                    value={contact.email}
                                    onChange={handleChange}
                                />
                                <Form.Control
                                    as="textarea"
                                    required
                                    placeholder="Enter message"
                                    rows="5"
                                    name='message'
                                    value={contact.message}
                                    onChange={handleChange}
                                />
                                {notifyMessage ? <div className={style.NotifyMessage}>Send successfully</div> : null}
                                <Button type="submit" className={style.FormSubmit}>
                                    SEND
                                </Button>
                            </Form>
                        </Reveal>
                    </Col>
                    <Col md={7}>
                        <Flip right>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6062971.908096524!2d103.24658773287804!3d15.542648774724496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ-G6p24gVGjGoSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1597077948186!5m2!1svi!2s"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allowFullScreen={true}
                                aria-hidden={false}
                                tabIndex="0"
                                title='map'
                                style={{ filter: 'brightness(70%)' }}
                                className="d-none d-md-block"
                            >
                            </iframe>
                        </Flip>
                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default Contact;
