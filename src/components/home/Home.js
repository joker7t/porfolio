import React, { useEffect } from 'react';
import classes from './css/Home.module.scss';
import Hello from './svg/Hello.js';
import { scroller } from "react-scroll";
import Background from './Background';

const scrollToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 1000,
        delay: 100,
        smooth: true
    });
};

const Home = () => {
    useEffect(() => {

        //eslint-disable-next-line
    }, []);

    return (
        <div className={classes.home}>
            <div className={classes.homeMainContainer}>
                <Background />

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
