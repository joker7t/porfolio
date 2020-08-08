import React from 'react';
import Idea from './Idea';
import { Row, Col } from 'react-bootstrap';
import style from './css/IdeaContainer.module.scss';
import { ReactComponent as SpeedDesign } from "../../../resources/images/about/speed.svg";
import { ReactComponent as ResponsiveDesign } from "../../../resources/images/about/computer.svg";
import { ReactComponent as Design } from "../../../resources/images/about/data.svg";
import { ReactComponent as PowerDeisgn } from "../../../resources/images/about/startup.svg";

const IdeaContainer = () => {
    return (
        <Row>
            <Col md={3} xs={6} >
                <Idea>
                    <SpeedDesign className={style.IdeaImage} />
                </Idea>
            </Col>
            <Col md={3} xs={6} >
                <Idea>
                    <ResponsiveDesign className={style.IdeaImage} />
                </Idea>
            </Col>
            <Col md={3} xs={6} >
                <Idea>
                    <Design className={style.IdeaImage} />
                </Idea>
            </Col>
            <Col md={3} xs={6} >
                <Idea>
                    <PowerDeisgn className={style.IdeaImage} />
                </Idea>
            </Col>
        </Row>
    );
}

export default IdeaContainer;
