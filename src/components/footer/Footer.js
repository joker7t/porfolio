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
                <div className={style.FooterRollBackButtonSvg}>
                    <ArrowUp style={{ margin: 'auto' }} />
                </div>
            </div>

            <div className={style.FooterIconContainer}>
                <div className={style.FooterIcon}>
                    <a target='blank' href='https://www.linkedin.com/in/toan-nguyen-0b2aa41aa/'>
                        <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
                <div className={style.FooterIcon}>
                    <a target='blank' href='https://www.facebook.com/toan.nguyen131196'>
                        <i className="fa fa-facebook fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
                <div className={style.FooterIcon}>
                    <a target='blank' href='https://www.instagram.com/toan.ng96/?hl=vi'>
                        <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
            </div>

            <div className={style.FooterText}>
                <span style={{ letterSpacing: '3px' }}>TOAN NGUYEN </span>
                <span className={style.FooterTextHighlight}>@ 2020</span>
            </div>

        </footer>
    );
}

export default Footer;
