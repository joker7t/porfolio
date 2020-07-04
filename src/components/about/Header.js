import React, { useEffect, useRef, useState } from 'react';
import style from './css/Header.module.scss';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { scroller } from "react-scroll";

const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1000,
            delay: 100,
            smooth: true
        });
    };

    return (
        <div className={`${style.stickyWrapper} ${isSticky ? style.sticky : ''}`} ref={ref}>
            <div className={style.stickyInner}>
                <Navbar expand="md" className={style.Header}>
                    <Navbar.Brand onClick={() => scrollToElement('home')}>
                        Logo here
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown.Divider />
                            <Nav.Link className={style.HeaderButton} onClick={() => scrollToElement('about')}>
                                <span>A</span>
                                <span>b</span>
                                <span>o</span>
                                <span>u</span>
                                <span>t</span>
                            </Nav.Link>
                            <Nav.Link className={style.HeaderButton}>
                                <span>S</span>
                                <span>k</span>
                                <span>i</span>
                                <span>l</span>
                                <span>l</span>
                                <span>s</span>
                            </Nav.Link>
                            <Nav.Link className={style.HeaderButton}>
                                <span>W</span>
                                <span>o</span>
                                <span>r</span>
                                <span>k</span>
                                <span>s</span>
                            </Nav.Link>
                            <Nav.Link className={style.HeaderButton}>
                                <span>C</span>
                                <span>o</span>
                                <span>n</span>
                                <span>t</span>
                                <span>a</span>
                                <span>c</span>
                                <span>t</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;
