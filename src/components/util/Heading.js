import React, { useRef } from 'react';
import style from './css/Heading.module.scss';
import { TimelineLite, TweenLite, Power2 } from "gsap";
import Reveal from 'react-reveal/Reveal';

const Heading = ({ text }) => {
    const lettersRef = useRef([]);
    const headingLineTopRef = useRef(null);
    const headingLineBottomRef = useRef(null);

    const showHeading = () => {
        const timeline = new TimelineLite();
        timeline
            .fromTo(
                headingLineTopRef.current,
                0.7,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, ease: Power2.easeOut, outlineOffset: '-=875' }
                , 0.2
            )
            .fromTo(
                headingLineBottomRef.current,
                0.7,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, ease: Power2.easeOut, outlineOffset: '-=875' }
                , 0.2
            );

        lettersRef.current.forEach((letterRef, i) => {
            console.log(i)
            TweenLite.fromTo(
                letterRef,
                0.6,
                { scaleX: 0.3, opacity: 0 },
                { scaleX: 1, opacity: 1, ease: Power2.easeOut, delay: 0.15 * i },
            )
        })
    }

    const showText = () =>
        [...text].map((character, i) => <span key={i} ref={el => lettersRef.current[i] = el}>{character}</span>)


    return (
        <div className='mx-auto'>
            <Reveal onReveal={() => showHeading()}>
                <h2 className={style.Heading}>
                    <span className={style.HeadingText}>
                        <span ref={headingLineTopRef} className={`${style.HeadingLine} ${style.HeadingLineTop}`}></span>
                        <span className="letters">
                            {showText()}
                        </span>
                        <span ref={headingLineBottomRef} className={`${style.HeadingLine} ${style.HeadingLineBottom}`}></span>
                    </span>
                </h2>
            </Reveal>
        </div>
    );
}

export default Heading;
