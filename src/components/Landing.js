import React from 'react';
import Home from './home/Home';
import About from './about/About';
import { Element } from 'react-scroll';
import Contact from './contact/Contact';
import Skills from './skills/Skills';
import Works from './works/Works';
import Footer from './footer/Footer';

const Landing = () => {
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
        </div>
    );
}

export default Landing;
