import React, { useRef } from 'react';
import style from './css/Idea.module.scss';
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';
import { TweenMax, Power2 } from 'gsap';

const Idea = ({ children, ideaContent }) => {
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    const show = () => {
        TweenMax.fromTo(
            imageRef.current,
            0.75,
            { transform: 'rotateY(-180deg)', opacity: 0 },
            { transform: 'rotateY(0deg)', opacity: 1, ease: Power2.easeInOut }
        );

        TweenMax.from(
            contentRef.current,
            0.7,
            { opacity: 0, ease: Power2.easeOut, delay: 0.7 }
        );
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
