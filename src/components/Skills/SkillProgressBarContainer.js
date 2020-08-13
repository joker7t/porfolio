import React from 'react';
import SkillProgressBar from './SkillProgressBar';

const SkillProgressBarContainer = () => {

    const data = [
        {
            name: 'Javascript',
            percentage: 60
        },
        {
            name: 'Java',
            percentage: 60
        },
        {
            name: 'React',
            percentage: 60
        },
        {
            name: 'Spring',
            percentage: 60
        },
        {
            name: 'JSF',
            percentage: 60
        },
        {
            name: 'NodeJS',
            percentage: 60
        },
        {
            name: 'HTML',
            percentage: 60
        },
        {
            name: 'CSS',
            percentage: 60
        },
        {
            name: 'UI Design',
            percentage: 60
        },
        {
            name: 'Docker',
            percentage: 60
        }
    ];

    const show = () => data.map((element, i) =>
        <SkillProgressBar key={i} name={element.name} percentage={element.percentage} />
    )


    return (
        <div>
            {show()}
        </div>
    );
}

export default SkillProgressBarContainer;
