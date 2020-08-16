import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineMax, Expo } from 'gsap';
import style from './css/WorkItem.module.scss';

const WorkItem = ({ workItem, previewElement }) => {
    const itemRef = useRef(null);
    const nameRef = useRef(null);

    useEffect(() => {
        TweenMax.set(previewElement.current, { width: 0 });
        const timeline = new TimelineMax();
        itemRef.current.onmouseenter = () => {
            timeline.to(
                previewElement.current,
                1,
                { width: '100%', ease: Expo.easeInOut }
            );
            previewElement.current.style.backgroundImage = `url('${workItem.mainPic}')`;
        };
        itemRef.current.onmouseout = () => {
            timeline.to(
                previewElement.current,
                0.6,
                { width: 0, ease: Expo.easeInOut }
            );
        };
        previewElement.current.onmouseover = () => {
            timeline.to(
                previewElement.current,
                1,
                { width: 600, ease: Expo.easeInOut }
            );
        };
        previewElement.current.onmouseout = () => {
            timeline.to(
                previewElement.current,
                0.6,
                { width: 0, ease: Expo.easeInOut }
            );
        };
        //eslint-disable-next-line
    }, []);

    const { name } = workItem;

    return (
        <div className={style.WorkItem} ref={itemRef}>

            <div className={style.Item} ref={nameRef}>
                <div className={style.Name}>
                    <span data-text={name}>{name}</span>
                </div>
            </div>
        </div>
    );
}

export default WorkItem;
