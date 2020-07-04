import React from 'react';
import Home from './home/Home';
import About from './about/About';
import { Element } from 'react-scroll';

const Landing = () => {
    return (
        <div>
            <Element name='home'>
                <Home />
            </Element>
            <Element name='about'>
                <About />
            </Element>

        </div>
    );
}

export default Landing;
