import React, { useEffect, useState } from 'react';
import style from './css/Header.module.scss';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { scroller } from "react-scroll";

const Header = () => {
    const [headerShow, setHeaderShow] = useState(false);

    const handleScroll = () => window.scrollY >= window.innerHeight ? setHeaderShow(true) : setHeaderShow(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        //eslint-disable-next-line
    }, []);

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1000,
            delay: 100,
            smooth: true
        });
    };

    return (
        <div className={`${style.Header} ${headerShow ? style.HeaderShow : style.HeaderHidden}`}>
            <Navbar expand="md" style={{ padding: '0 1rem' }}>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className='ml-auto' style={{ border: 'none' }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavDropdown.Divider />
                    <Nav className='ml-5'>
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
    );
}

export default Header;
