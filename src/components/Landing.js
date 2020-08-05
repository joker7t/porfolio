import React from 'react';
import Home from './home/Home';
import About from './about/About';
import { Element } from 'react-scroll';
import Contact from './contact/Contact';
import Skills from './Skills/Skills';
import Works from './works/Works';

const Landing = () => {
    return (
        <div>
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

        </div>
    );
}

export default Landing;
