import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineMax, Expo } from 'gsap';
import style from './css/WorkItem.module.scss';

const WorkItem = ({ workItem }) => {
    const projectPreviewRef = useRef(null);
    const itemRef = useRef(null);

    useEffect(() => {
        TweenMax.set(projectPreviewRef.current, { width: 0 });
        const timeline = new TimelineMax();
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

    const { name } = workItem;

    return (
        <div className={style.WorkItem}>
            <div className={style.ItemPreview} ref={projectPreviewRef}></div>
            <div className={style.Item} ref={itemRef}>
                <div className={style.Name}>
                    <span data-text={name}>{name}</span>
                </div>
            </div>
        </div>
    );
}

export default WorkItem;
