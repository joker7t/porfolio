import React, { useState } from 'react';
import Heading from '../util/Heading';
import { Container, Row } from "react-bootstrap";
import style from './css/Works.module.scss';
import workData from './WorkData';
import WorkItem from './WorkItem';
import WorkPopup from './WorkPopup';

const Works = () => {
    const [popupData, setPopupData] = useState({
        data: {},
        isActive: false
    });

    const showItems = () => workData.map((item, i) =>
        <WorkItem key={i} workItem={item} showPopup={(data) => handleClick(data)} />
    )

    const handleClick = (data) => {
        setPopupData({
            data: data,
            isActive: true
        })
    }

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
            <WorkPopup popupData={popupData} setPopupData={setPopupData} />
        </div>
    );
}

export default Works;
