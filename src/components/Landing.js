import React, { useEffect, useRef, useState } from 'react';
import Home from './home/Home';
import About from './about/About';
import { Element } from 'react-scroll';
import Contact from './contact/Contact';
import Skills from './skills/Skills';
import Works from './works/Works';
import Footer from './footer/Footer';
import Image from '../resources/images/avatar.JPG';
import { TweenMax } from 'gsap';

const Landing = () => {
    const cursorRef = useRef(null);
    const cursorFollowerRef = useRef(null);
    const imageRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        // const cursorFollower = cursorFollowerRef.current;
        let posX = 0;
        let posY = 0;
        let mouseX = 0;
        let mouseY = 0;
        TweenMax.to({}, 0.0012, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 9;
                posX += (mouseY - posY) / 9;
                // TweenMax.set(cursorFollower, {
                //     css: {
                //         left: posX - 20,
                //         top: posY - 20
                //     }
                // });
                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
            }
        });

        document.onmousemove = (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        }

        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        imageRef.current.onmouseenter = () => {
            setIsActive(true);
        }

        imageRef.current.onmouseout = () => {
            setIsActive(false);
        }
    }, [isActive]);

    return (
        <div style={{ overflow: 'hidden' }}>
            <Element name='home'>
                <Home />
            </Element>
            <Element name='about'>
                <About />
            </Element>
            <Element name='skills'>
                <Skills />
            </Element>
            <Element name='works'>
                <Works />
            </Element>
            <Element name='contact'>
                <Contact />
            </Element>
            <Footer />

            <div className={`cursor ${isActive ? 'active' : ''}`} ref={cursorRef}></div>
            <div id='wrapper'>
                <div className='porfolio-item'>
                    <div className='porfolio-thumb'>
                        <img src={Image} width='500px' height='500px' ref={imageRef} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
