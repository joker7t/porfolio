import React, { useEffect, useRef, useState } from 'react';
import classes from './css/Home.module.scss';
import Hello from './svg/Hello.js';
import { buildHomeCanvas } from './HomeCanvas';
import { scroller } from "react-scroll";

const scrollToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 1000,
        delay: 100,
        smooth: true
    });
};

const Home = () => {
    const homeCanvasRef = useRef(null);
    const [cachedView, setCachedView] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const space = buildHomeCanvas(homeCanvasRef, null);

        window.addEventListener('resize', function (event) {
            if (cachedView.width !== window.innerWidth || cachedView.height !== window.innerHeight) {
                setCachedView({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                homeCanvasRef.current.removeChild(homeCanvasRef.current.firstChild);
                buildHomeCanvas(homeCanvasRef, space);
            }
        });

        //eslint-disable-next-line
    }, []);

    return (
        <div className={classes.home}>
            <div className={classes.homeMainContainer}>
                <div id="HomeCanvas" className={classes.homeCanvas} ref={homeCanvasRef}></div>
                <div className={classes.homeText}>
                    Hello, I'm <span className={classes.highlight}>Toan Nguyen</span><br />
                    I'm a full-stack developer.
                    <div style={{ height: '20px' }}></div>
                    <span className={classes.homeTextInfo} onClick={() => scrollToElement('about')}>
                        Know more about me <i className={`fa fa-arrow-right ${classes.homeTextInfoArrow}`} aria-hidden="true"></i>
                    </span>
                </div>
            </div>


            <div className={classes.homeHello}>
                <div className={classes.homeHelloContainer}>
                    <div className={`${classes.homeHelloContainerHalf} ${classes.homeHelloContainerHalfLeft}`}></div>
                    <div className={`${classes.homeHelloContainerHalf} ${classes.homeHelloContainerHalfRight}`}></div>
                    <div className={classes.homeHelloContainerLetter}>
                        <Hello />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
