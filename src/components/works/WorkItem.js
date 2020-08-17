import React, { useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import style from './css/WorkItem.module.scss';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const WorkItem = ({ workItem }) => {
    const itemRef = useRef(null);
    const nameRef = useRef(null);
    const pictureRef = useRef(null);

    useEffect(() => {
        pictureRef.current.style.backgroundImage = `url('${workItem.mainPic}')`;
        const timeline = new TimelineMax({
            scrollTrigger: {
                trigger: nameRef.current,
                scrub: true,
                start: "top bottom",
                end: "+=100%"
            }
        });
        timeline.fromTo(
            nameRef.current,
            {
                y: -50
            },
            {
                y: 50,
                ease: "none"
            }
        )
        //eslint-disable-next-line
    }, []);

    const { name } = workItem;

    return (
        <div className={style.WorkItem} ref={itemRef}>
            <div className={style.Name} ref={nameRef}>
                <span data-text={name}>{name}</span>
            </div>
            <div className={style.Picture} ref={pictureRef}></div>
        </div>
    );
}

export default WorkItem;
