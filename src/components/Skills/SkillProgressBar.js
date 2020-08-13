import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import style from './css/SkillProgressBar.module.scss';
import Reveal from 'react-reveal/Reveal';

const SkillProgressBar = ({ name, percentage }) => {
    return (
        <div className={style.Container}>
            <div className={style.Name}>
                {name}
            </div>
            <div className={style.Progress}>
                <Reveal>
                    <ProgressBar now={percentage} />
                </Reveal>
                <div className={style.Label}>{`${percentage}%`}</div>
            </div>
        </div>

    );
}

export default SkillProgressBar;
