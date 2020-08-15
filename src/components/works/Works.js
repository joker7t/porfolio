import React, { useEffect, useRef } from 'react';
import Heading from '../util/Heading';
import { Container, Row } from "react-bootstrap";
import style from './css/Works.module.scss';
import { TweenMax, TimelineMax, Expo } from 'gsap';

const Works = () => {
    const projectPreviewRef = useRef(null);
    const itemRef = useRef(null);
    const data = [
        {}
    ];

    useEffect(() => {
        TweenMax.set(projectPreviewRef.current, { width: 0 });
        const timeline = new TimelineMax();
        console.log(itemRef);
        itemRef.current.onmouseenter = () => {
            timeline.to(
                projectPreviewRef.current,
                1,
                { width: 600, ease: Expo.easeInOut }
            );
        };
        itemRef.current.onmouseout = () => {
            timeline.to(
                projectPreviewRef.current,
                0.6,
                { width: 0, ease: Expo.easeInOut }
            );
        };

    });

    const show = () => {

    };

    return (
        <Container className={style.Works}>
            <Row>
                <Heading text='Works' />
            </Row>
            <div className='navigation-wrapper'>
                <div className='project-preview-wrapper'>
                    <div className='project-preview' ref={projectPreviewRef}></div>
                </div>
                <ul>
                    <li className='navigation-item' ref={itemRef}>
                        <a href="" className='navigation-link navigation-link-1'>
                            <span data-text="Toan">Toan</span>
                        </a>
                    </li>
                    <li className='navigation-item'>
                        <a href="" className='navigation-link navigation-link-2'>
                            <span data-text="Toan">Toan</span>
                        </a>
                    </li>
                    <li className='navigation-item'>
                        <a href="" className='navigation-link navigation-link-3'>
                            <span data-text="Toan">Toan</span>
                        </a>
                    </li>
                    <li className='navigation-item'>
                        <a href="" className='navigation-link navigation-link-4'>
                            <span data-text="Toan">Toan</span>
                        </a>
                    </li>
                    <li className='navigation-item'>
                        <a href="" className='navigation-link navigation-link-5'>
                            <span data-text="Toan">Toan</span>
                        </a>
                    </li>
                    <li className='navigation-item'>
                        <a href="" className='navigation-link navigation-link-6'>
                            <span data-text="Toan">Toan</span>
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    );
}

export default Works;
