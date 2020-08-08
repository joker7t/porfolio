import React, { useRef } from 'react';
import style from './css/Idea.module.scss';
import Reveal from 'react-reveal/Reveal';
import { TweenMax, Linear } from 'gsap';

const Idea = ({ children, ideaContent }) => {
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    const show = () => {
        TweenMax.from(
            imageRef.current,
            1.5,
            { transform: 'rotateY(90deg)', ease: Linear.easeNone }
        )
        TweenMax.from(
            contentRef.current,
            1,
            { opacity: 0, ease: Linear.easeNone, delay: 1.5 }
        )
    }

    return (
        <div>
            <Reveal onReveal={() => show()}>
                <div style={{ textAlign: 'center' }}>
                    <div className={style.Idea} ref={imageRef}>
                        {children}
                    </div>
                    <span ref={contentRef} className={style.Content}>{ideaContent}</span>
                </div>
            </Reveal>
        </div>
    );
}

export default Idea;
