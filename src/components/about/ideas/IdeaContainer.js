import React from 'react';
import Idea from './Idea';
import { Row, Col } from 'react-bootstrap';

const IdeaContainer = () => {
    return (
        <Row>
            <Col>
                <Idea />
            </Col>
            <Col>
                <Idea />
            </Col>
            <Col>
                <Idea />
            </Col>
            <Col>
                <Idea />
            </Col>
        </Row>
    );
}

export default IdeaContainer;
