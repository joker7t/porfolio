import React from 'react';
import Idea from './Idea';
import { Row, Col } from 'react-bootstrap';
import style from './css/IdeaContainer.module.scss';
import { ReactComponent as SpeedDesign } from "../../../resources/images/about/speed.svg";
import { ReactComponent as ResponsiveDesign } from "../../../resources/images/about/computer.svg";
import { ReactComponent as Design } from "../../../resources/images/about/data.svg";
import { ReactComponent as PowerDeisgn } from "../../../resources/images/about/startup.svg";

const IdeaContainer = () => {
    const data = {
        speedDesignText: 'I love to make website with a high performance',
        responsiveDesignText: 'My websites render on various resolutions, screen sizes, and browsers',
        designText: 'Clear, user-friendly design and navigation are the main things in my websites',
        powerDeisgnText: 'Dynamic wesite is one of my highest priorities'
    };

    return (
        <Row>
            <Col md={3} xs={6} className='p-3'>
                <Idea ideaContent={data.speedDesignText} delay={0.1}>
                    <SpeedDesign className={style.IdeaImage} />
                </Idea>
            </Col>
            <Col md={3} xs={6} className='p-3'>
                <Idea ideaContent={data.responsiveDesignText} delay={0.2}>
                    <ResponsiveDesign className={style.IdeaImage} />
                </Idea>
            </Col>
            <Col md={3} xs={6} className='p-3'>
                <Idea ideaContent={data.designText} delay={0.3}>
                    <Design className={style.IdeaImage} />
                </Idea>
            </Col>
            <Col md={3} xs={6} className='p-3'>
                <Idea ideaContent={data.powerDeisgnText} delay={0.4}>
                    <PowerDeisgn className={style.IdeaImage} />
                </Idea>
            </Col>
        </Row>
    );
}

export default IdeaContainer;
