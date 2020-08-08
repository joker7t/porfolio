import React, { useRef, useState, useEffect } from 'react';
import style from './css/AboutContent.module.scss';
import { TimelineMax, TweenMax, Power2, Linear } from "gsap";
import Reveal from 'react-reveal/Reveal';

const AboutContent = () => {
    const lettersRef = useRef([]);
    const aboutContentLineRef = useRef(null);
    const textRef = useRef(null);
    //eslint-disable-next-line
    const [content, setContent] = useState('Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello');

    const showContent = () => {

        const timeline = new TimelineMax();
        timeline
            .fromTo(
                aboutContentLineRef.current,
                1,
                { scaleY: 0, opacity: 0 },
                { scaleY: 1, opacity: 1, ease: Linear.easeNone, repeat: -1, delay: 0.01 * content.length }
            );

        lettersRef.current.forEach((letterRef, i) => {
            TweenMax.fromTo(
                letterRef,
                0.6,
                { scaleX: 0.3, opacity: 0 },
                { scaleX: 1, opacity: 1, ease: Power2.easeOut, delay: 0.01 * i },
            )
        })
    }

    const showText = () =>
        [...content].map((character, i) => <span key={i} ref={el => lettersRef.current[i] = el}>{character}</span>)


    return (
        <div>
            <Reveal onReveal={() => showContent()}>
                <div className={style.AboutContent}>
                    <span className={style.AboutContentText}>

                        <span className={style.AboutContentTextLetters} ref={textRef}>
                            {showText()}{' '}
                            <span className={style.AboutContentTextLine} ref={aboutContentLineRef}>|</span>
                        </span>

                    </span>
                </div>
            </Reveal>
        </div>
    );
}

export default AboutContent;
