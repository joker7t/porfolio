import React from 'react';
import style from './css/AboutContent.module.scss';
import Fade from 'react-reveal/Fade';

const AboutContent = () => {

    return (
        <div>
            <Fade right>
                <div className={style.AboutContent} >
                    I’m a Web developer in Axon Active Vietnam. <br />
                    I have over 3 years of developing web applications. I am working as a Full-stack developer for projects about fintech and e-commerce. My experience includes MySql, Postgres, MongoDB, Java, JSF, Spring, Javascript, React, Nginx. I also have experience in testing.<br />
                    Besides that, I am familiar with Kanban & Scrum process. More important, I’m confident, hard-working and interested in learning new things.
                </div>
            </Fade>
        </div>
    );
}

export default AboutContent;
