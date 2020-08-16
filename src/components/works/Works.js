import React, { useRef } from 'react';
import Heading from '../util/Heading';
import { Container, Row } from "react-bootstrap";
import style from './css/Works.module.scss';
import workData from './WorkData';
import WorkItem from './WorkItem';

const Works = () => {
    const workPreviewRef = useRef(null);

    const showItems = () => workData.map((item, i) =>
        <WorkItem key={i} workItem={item} previewElement={workPreviewRef} />
    )

    return (
        <Container className={style.Works}>
            <Row>
                <Heading text='Works' />
            </Row>
            <div className={style.WorkItemContainer}>
                <div className={style.ItemPreview} ref={workPreviewRef}></div>
                <div>
                    {showItems()}
                </div>
            </div>
        </Container>
    );
}

export default Works;
