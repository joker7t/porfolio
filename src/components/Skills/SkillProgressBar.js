import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import style from './css/SkillProgressBar.module.scss';
import Reveal from 'react-reveal/Reveal';

const SkillProgressBar = ({ name, percentage }) => {
    const [selfPercentage, setSelfPercentage] = useState(0);

    const show = () => {
        setTimeout(() => {
            setSelfPercentage(percentage);
        }, 1000);
    }

    return (
        <div className={style.Container}>
            <div className={style.Name}>
                {name}
            </div>
            <div className={style.Progress}>
                <Reveal onReveal={() => show()}>
                    <ProgressBar now={selfPercentage} />
                </Reveal>
                <div className={style.Label}>{`${selfPercentage}%`}</div>
            </div>
        </div>

    );
}

export default SkillProgressBar;
