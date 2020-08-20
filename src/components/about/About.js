import React, { useRef, useEffect } from 'react';
import style from './css/About.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from '../../resources/images/avatar.JPG';
import Heading from "../util/Heading";
import AboutContent from './AboutContent';
import IdeaContainer from './ideas/IdeaContainer';
import Zoom from 'react-reveal/Zoom';
import hoverMoveAnimate from '../util/hoverMoveAnimate';

const About = () => {
    const avatarTef = useRef(null);

    useEffect(() => {
        avatarTef.current.onmousemove = (e) => {
            hoverMoveAnimate(e, avatarTef.current);
        }
        avatarTef.current.onmouseleave = (e) => {
            hoverMoveAnimate(e, avatarTef.current);
        }

        //eslint-disable-next-line
    }, []);

    return (
        <div className={style.AboutBackground}>
            <Container className={style.About}>
                <Row>
                    <Heading text='about' />
                </Row>
                <Row>
                    <Col md={4} className='p-5' ref={avatarTef}>
                        <Zoom top>
                            <img className={style.AboutAvatar} src={Avatar} alt='Toan Nguyen' />
                        </Zoom>
                    </Col>
                    <Col md={8} className={style.AboutContent}>
                        <AboutContent />
                    </Col>
                </Row>
                <IdeaContainer />
            </Container>
        </div>
    );

}

export default About;
