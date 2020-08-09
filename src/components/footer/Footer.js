import React from 'react';
import style from './css/Footer.module.scss';
import { ReactComponent as ArrowUp } from "../../resources/images/footer/up-arrow.svg";
import { scroller } from "react-scroll";

const Footer = () => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1000,
            delay: 100,
            smooth: true
        });
    };

    return (
        <footer className={style.Footer}>
            <div className={style.FooterRollBackButton} onClick={() => scrollToElement('home')}>
                <ArrowUp style={{ margin: 'auto' }} />
            </div>

        </footer>
    );
}

export default Footer;
