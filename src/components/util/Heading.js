import React from 'react';
import style from './css/Heading.module.scss';

const Heading = ({ text }) => {
    return (
        <div className='mx-auto'>
            <h2 className={style.Heading}>
                <span className={style.HeadingText}>
                    <span className={`${style.HeadingLine} ${style.HeadingLineTop}`}></span>
                    <span className="letters">{text}</span>
                    <span className={`${style.HeadingLine} ${style.HeadingLineTop}`}></span>
                </span>
            </h2>
        </div>
    );
}

export default Heading;
