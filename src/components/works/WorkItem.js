import React, { useEffect, useRef } from 'react';
import { TimelineMax, Expo } from 'gsap';
import style from './css/WorkItem.module.scss';

const WorkItem = ({ workItem, alignRight }) => {
    const itemRef = useRef(null);
    const nameRef = useRef(null);
    const pictureRef = useRef(null);

    useEffect(() => {
        //     const timeline = new TimelineMax();
        //     itemRef.current.onmouseenter = () => {
        //         timeline.to(
        //             pictureRef.current,
        //             1,
        //             { height: 500, ease: Expo.easeInOut }
        //         );
        pictureRef.current.style.backgroundImage = `url('${workItem.mainPic}')`;
        //     };
        //     itemRef.current.onmouseout = () => {
        //         timeline.to(
        //             pictureRef.current,
        //             0.6,
        //             { height: 0, ease: Expo.easeInOut }
        //         );
        //     };
        //eslint-disable-next-line
    }, []);

    const { name } = workItem;

    return (
        <div className={style.WorkItem} ref={itemRef}>

            <div className={style.Item} ref={nameRef}>
                <div className={style.Name}>
                    <span data-text={name}>{name}</span>
                </div>
                <div className={style.Picture} ref={pictureRef}></div>
            </div>
        </div>
    );
}

export default WorkItem;
