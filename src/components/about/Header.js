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
                <Navbar expand="md" className={style.Header} style={{ padding: '0 1rem' }}>
                    <Navbar.Brand onClick={() => scrollToElement('home')}>
                        Logo here
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown.Divider />
                            <Nav.Link className={style.HeaderButton} onClick={() => scrollToElement('about')}>
                                <div className={style.HeaderButtonLetter}>A</div>
                                <div className={style.HeaderButtonLetter}>b</div>
                                <div className={style.HeaderButtonLetter}>o</div>
                                <div className={style.HeaderButtonLetter}>u</div>
                                <div className={style.HeaderButtonLetter}>t</div>
                            </Nav.Link>
                            <Nav.Link className={style.HeaderButton}>
                                <div className={style.HeaderButtonLetter}>S</div>
                                <div className={style.HeaderButtonLetter}>k</div>
                                <div className={style.HeaderButtonLetter}>i</div>
                                <div className={style.HeaderButtonLetter}>l</div>
                                <div className={style.HeaderButtonLetter}>l</div>
                                <div className={style.HeaderButtonLetter}>s</div>
                            </Nav.Link>
                            <Nav.Link className={style.HeaderButton}>
                                <div className={style.HeaderButtonLetter}>W</div>
                                <div className={style.HeaderButtonLetter}>o</div>
                                <div className={style.HeaderButtonLetter}>r</div>
                                <div className={style.HeaderButtonLetter}>k</div>
                                <div className={style.HeaderButtonLetter}>s</div>
                            </Nav.Link>
                            <Nav.Link className={style.HeaderButton}>
                                <div className={style.HeaderButtonLetter}>C</div>
                                <div className={style.HeaderButtonLetter}>o</div>
                                <div className={style.HeaderButtonLetter}>n</div>
                                <div className={style.HeaderButtonLetter}>t</div>
                                <div className={style.HeaderButtonLetter}>a</div>
                                <div className={style.HeaderButtonLetter}>c</div>
                                <div className={style.HeaderButtonLetter}>t</div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;
