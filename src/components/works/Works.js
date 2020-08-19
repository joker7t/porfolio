import React from 'react';
import Heading from '../util/Heading';
import { Container, Row } from "react-bootstrap";
import style from './css/Works.module.scss';
import workData from './WorkData';
import WorkItem from './WorkItem';
import WorkPopup from './WorkPopup';

const Works = () => {

    const showItems = () => workData.map((item, i) =>
        <WorkItem key={i} workItem={item} />
    )

    return (
        <div>
            <Container className={style.Works}>
                <Row>
                    <Heading text='Works' />
                </Row>
                <div className={style.WorkItemContainer}>
                    <div>
                        {showItems()}
                    </div>
                </div>
            </Container>
            <a href="#popup" className="btn btn--white">Book now!</a>
            <WorkPopup />
        </div>
    );
}

export default Works;
