import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const SkillProgressBar = () => {
    return (
        <div>
            <div>
                Javascript
            </div>
            <div>
                <ProgressBar now={60} label="60%" />
            </div>
        </div>

    );
}

export default SkillProgressBar;
