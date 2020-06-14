import React from 'react';
import classes from './css/Hello.module.scss';

const Hello = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="350" height="280" viewBox="0 0 428.83 343.87">

            <g id="hello_h">
                <line className={`${classes.Line} ${classes.LineVerticalAnimation1}`} x1="21.5" y1="0.01" x2="21.5" y2="152.01"></line>
                <line className={`${classes.Line} ${classes.LineHorizontalAnimation2}`} x1="21.5" y1="74.01" x2="103.17" y2="74.01"></line>
                <line className={`${classes.Line} ${classes.LineVerticalAnimation2}`} x1="103.17" y1="0.01" x2="103.17" y2="152.01"></line>
            </g>

            <g id="hello_e">
                <line className={`${classes.Line} ${classes.LineVerticalAnimation1}`} x1="168.17" y1="0.01" x2="168.17" y2="152.01" ></line>
                <line className={`${classes.Line} ${classes.LineHorizontalAnimation1}`} x1="168.17" y1="19.5" x2="245.83" y2="19.5" ></line>
                <line className={`${classes.Line} ${classes.LineHorizontalAnimation2}`} x1="168.17" y1="76.01" x2="240.83" y2="76.01" ></line>
                <line className={`${classes.Line} ${classes.LineHorizontalAnimation3}`} x1="168.17" y1="131.5" x2="245.83" y2="131.5" ></line>
            </g>

            <g id="hello_l1">
                <line className={`${classes.Line} ${classes.LineVerticalAnimation1}`} x1="21.5" y1="186.68" x2="21.5" y2="338.68"></line>
                <line className={`${classes.Line} ${classes.LineHorizontalAnimation2}`} x1="21.5" y1="318.17" x2="94.17" y2="318.17"></line>
            </g>

            <g id="hello_l2">
                <line className={`${classes.Line} ${classes.LineVerticalAnimation1}`} x1="128.5" y1="186.68" x2="128.5" y2="338.68"></line>
                <line className={`${classes.Line} ${classes.LineHorizontalAnimation3}`} x1="128.5" y1="318.17" x2="201.17" y2="318.17"></line>
            </g>

            <g id="hello_o">
                <circle className={`${classes.Line} ${classes.LineCircle}`} cx="283.51" cy="262.69" r="60.68"></circle>
            </g>

            <g id="hello_dot">
                <circle className={classes.Dot} cx="403.17" cy="316.01" r="25.67" data-svg-origin="403.17000007629395 316.00999641418457" ></circle>
            </g>

        </svg>
    );
}

export default Hello;
