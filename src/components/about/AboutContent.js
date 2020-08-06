import React, { useRef, useState } from 'react';
import style from './css/AboutContent.module.scss';
import { TimelineLite, TweenLite, Power2 } from "gsap";
import Reveal from 'react-reveal/Reveal';

const AboutContent = () => {
    const lettersRef = useRef([]);
    const headingLineTopRef = useRef(null);
    const headingLineBottomRef = useRef(null);
    //eslint-disable-next-line
    const [content, setContent] = useState('Hello goodbye');

    const showContent = () => {
        //     const timeline = new TimelineLite();
        //     timeline
        //         .fromTo(
        //             headingLineTopRef.current,
        //             0.7,
        //             { scaleX: 0, opacity: 0 },
        //             { scaleX: 1, opacity: 1, ease: Power2.easeOut, outlineOffset: '-=875' }
        //             , 0.2
        //         )
        //         .fromTo(
        //             headingLineBottomRef.current,
        //             0.7,
        //             { scaleX: 0, opacity: 0 },
        //             { scaleX: 1, opacity: 1, ease: Power2.easeOut, outlineOffset: '-=875' }
        //             , 0.2
        //         );

        //     lettersRef.current.forEach((letterRef, i) => {
        //         console.log(i)
        //         TweenLite.fromTo(
        //             letterRef,
        //             0.6,
        //             { scaleX: 0.3, opacity: 0 },
        //             { scaleX: 1, opacity: 1, ease: Power2.easeOut, delay: 0.15 * i },
        //         )
        //     })
    }

    const showText = () =>
        [...content].map((character, i) => <span key={i} ref={el => lettersRef.current[i] = el}>{character}</span>)


    return (
        <div>
            <Reveal onReveal={() => showContent()}>
                <h1 class="ml11">
                    <span class="text-wrapper">
                        <span class="line line1"></span>
                        <span class="letters">{showText()}</span>
                    </span>
                </h1>
            </Reveal>
        </div>
    );
}

export default AboutContent;
