import React, { useEffect, useRef, useState } from 'react';
import classes from './css/Header.module.scss';

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

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

    return (
        <div className={`${classes.stickyWrapper} ${isSticky ? classes.sticky : ''}`} ref={ref}>
            <div className={classes.stickyInner}>
                <Navbar bg="dark" variant="dark" expand="md" className={classes.header}>
                    <Navbar.Brand href="home">
                        Logo here
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link href="#explore-head-section">Explore</Nav.Link>
                            <Nav.Link href="#create-head-section">Create</Nav.Link>
                            <Nav.Link href="#share-head-section">Share</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;
