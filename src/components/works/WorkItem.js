import React, { useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import style from './css/WorkItem.module.scss';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import hoverMoveAnimate from '../util/hoverMoveAnimate';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const WorkItem = ({ workItem, showPopup }) => {
    const itemRef = useRef(null);
    const nameRef = useRef(null);
    const pictureRef = useRef(null);

    useEffect(() => {
        pictureRef.current.style.backgroundImage = `url('${workItem.mainPic}')`;
        pictureRef.current.onmousemove = (e) => {
            hoverMoveAnimate(e, pictureRef.current);
        }
        pictureRef.current.onmouseleave = (e) => {
            hoverMoveAnimate(e, pictureRef.current);
        }

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
                y: 50,
                transformOrigin: "left center"
            },
            {
                y: -20,
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
            <div className={style.Picture} ref={pictureRef} onClick={() => showPopup(workItem)}></div>
        </div>
    );
}

export default WorkItem;
