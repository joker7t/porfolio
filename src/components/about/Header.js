import React, { useEffect, useRef, useState } from 'react';
import classes from './css/Header.module.scss';

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
            <h1 className={classes.stickyInner}>Sticky</h1>
        </div>
    );
}

export default Header;
