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
                    <a><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></a>
                </div>
                <div className={style.FooterIcon}>
                    <a><i class="fa fa-facebook fa-3x" aria-hidden="true"></i></a>
                </div>
                <div className={style.FooterIcon}>
                    <a><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
