import React, { useEffect, useRef } from 'react';
import classes from './css/Home.module.scss';
import Hello from './svg/Hello.js';
import { buildHomeCanvas } from './HomeCanvas';

const Home = () => {
    const homeCanvasRef = useRef(null);

    useEffect(() => {
        const space = buildHomeCanvas(homeCanvasRef, null);

        window.addEventListener('resize', function (event) {
            homeCanvasRef.current.removeChild(homeCanvasRef.current.firstChild);
            buildHomeCanvas(homeCanvasRef, space);
        });

        //eslint-disable-next-line
    }, []);

    return (
        <div className={classes.home}>
            <div id="HomeCanvas" className={classes.homeCanvas} ref={homeCanvasRef}></div>

            <div className={classes.homeHello}>
                <div className={classes.homeHelloContainer}>
                    <div className={classes.homeHelloContainerHalf}></div>
                    <div className={classes.homeHelloContainerLetter}>
                        <Hello />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
