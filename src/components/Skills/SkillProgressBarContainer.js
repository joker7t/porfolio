import React from 'react';
import SkillProgressBar from './SkillProgressBar';

const SkillProgressBarContainer = () => {

    const data = [
        {
            name: 'Javascript',
            percentage: 80
        },
        {
            name: 'Java',
            percentage: 80
        },
        {
            name: 'React',
            percentage: 80
        },
        {
            name: 'Spring',
            percentage: 60
        },
        {
            name: 'JSF',
            percentage: 70
        },
        {
            name: 'NodeJS',
            percentage: 60
        },
        {
            name: 'HTML',
            percentage: 70
        },
        {
            name: 'CSS',
            percentage: 70
        },
        {
            name: 'UI Design',
            percentage: 50
        },
        {
            name: 'Docker',
            percentage: 50
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
