import React, { useEffect, useRef } from 'react';
import Heading from '../util/Heading';
import { Container, Row } from "react-bootstrap";
import style from './css/Works.module.scss';
import { TweenMax, TimelineMax, Expo } from 'gsap';

const Works = () => {
    const projectPreviewRef = useRef(null);
    const itemRef = useRef(null);
    const data = [
        {
            name: 'the waves'
        },
        {
            name: 'man city'
        },
        {
            name: 'the venue'
        },
        {
            name: 'natours'
        },
        {
            name: 'trillo'
        },
        {
            name: 'slack chat'
        },
        {
            name: 'shopping'
        },
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

    const showItems = () => data.map((item, i) =>
        <div key={i} className='navigation-item' ref={itemRef}>
            <div className='navigation-link'>
                <span data-text={item.name}>{item.name}</span>
            </div>
        </div>
    )

    return (
        <Container className={style.Works}>
            <Row>
                <Heading text='Works' />
            </Row>
            <div className='navigation-wrapper'>
                <div className='project-preview-wrapper'>
                    <div className='project-preview' ref={projectPreviewRef}></div>
                </div>
                <div>
                    {showItems()}
                </div>
            </div>
        </Container>
    );
}

export default Works;
