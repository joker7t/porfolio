import React, { useEffect, useState } from 'react';
import style from './css/Header.module.scss';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";

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

    return (
        <div className={`${style.Header} ${headerShow ? style.HeaderShow : style.HeaderHidden}`}>
            <Navbar expand="md" style={{ padding: '0 1rem' }}>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className='ml-auto' style={{ border: 'none' }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavDropdown.Divider className={style.HeaderDivider} />
                    <Nav className={style.HeaderContainer}>
                        <Nav.Link as={Link}
                            to='about'
                            className={style.HeaderButton}
                            activeClass={style.HeaderButtonActive}
                            smooth={true}
                            spy={true}
                            duration={1000}
                            delay={100}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link as={Link}
                            className={style.HeaderButton}
                            to='skills'
                            activeClass={style.HeaderButtonActive}
                            smooth={true}
                            spy={true}
                            duration={1000}
                            delay={100}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link as={Link}
                            className={style.HeaderButton}
                            to='works'
                            activeClass={style.HeaderButtonActive}
                            smooth={true}
                            spy={true}
                            duration={1000}
                            delay={100}
                        >
                            Works
                        </Nav.Link>
                        <Nav.Link as={Link}
                            className={style.HeaderButton}
                            to='contact'
                            activeClass={style.HeaderButtonActive}
                            smooth={true}
                            spy={true}
                            duration={1000}
                            delay={100}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
