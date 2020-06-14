import React from 'react';
import classes from './css/Home.module.scss';
import Hello from './svg/Hello.js';

const Home = () => {
    return (
        <div className={classes.home}>
            <canvas id="HomeCanvas" className={classes.homeCanvas}></canvas>

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
