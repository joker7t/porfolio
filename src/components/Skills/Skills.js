import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import data from './skills-data';
import Heading from '../util/Heading';
import { Container, Row, Col } from "react-bootstrap";
import Reveal from 'react-reveal/Reveal';
import style from './css/Skills.module.scss';

const Skills = () => {

    const show = () => {
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            var chart = am4core.create("skill-chart", am4plugins_wordCloud.WordCloud);
            chart.fontFamily = "Courier New";
            var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
            series.randomness = 0.1;
            series.rotationThreshold = 0.5;
            series.data = data;

            series.dataFields.word = "tag";
            series.dataFields.value = "count";

            series.heatRules.push({
                "target": series.labels.template,
                "property": "fill",
                "min": am4core.color("#0000CC"),
                "max": am4core.color("#CC00CC"),
                "dataField": "value"
            });

            var hoverState = series.labels.template.states.create("hover");
            hoverState.properties.fill = am4core.color("#C98D4B");

        });
    }

    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <Container className={style.Skills}>
                <Row>
                    <Heading text='Skills' />
                </Row>
                <Reveal onReveal={() => show()}>
                    <Row className={style.Container}>
                        <Col lg={7} className={style.Left}>
                            sdfdsfdsfds
                    </Col>
                        <Col lg={5} className={style.Right} style={{ padding: '0' }} id='skill-chart'>
                        </Col>
                    </Row>
                </Reveal>
            </Container>
        </div>
    );
}

export default Skills;
