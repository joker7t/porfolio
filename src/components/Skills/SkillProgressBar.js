import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import style from './css/SkillProgressBar.module.scss';

const SkillProgressBar = ({ name, percentage }) => {
    return (
        <div className={style.Container}>
            <div className={style.Name}>
                {name}
            </div>
            <div className={style.Progress}>
                <ProgressBar now={percentage} />
                <div className={style.Label}>{`${percentage}%`}</div>
            </div>
        </div>

    );
}

export default SkillProgressBar;
