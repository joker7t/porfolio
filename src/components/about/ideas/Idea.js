import React from 'react';
import style from './css/Idea.module.scss';
import { Image } from 'react-bootstrap';


// <Image className={style.IdeaImage} src={imgSrc} alt='a' rounded />

const Idea = ({ children }) => {
    return (
        <div>
            <div className={style.Idea}>{children}</div>
            <span>Sample text</span>
        </div>
    );
}

export default Idea;
