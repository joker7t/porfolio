import React, { useState } from 'react';
import style from './css/WorkPopup.module.scss';
import { Carousel } from 'react-bootstrap';

const WorkPopup = ({ popupData, setPopupData }) => {

    const [index, setIndex] = useState(0);
    const { data, isActive } = popupData;

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    const handleClose = () => {
        setPopupData({
            data: data,
            isActive: false
        })
        setIndex(0);
    }

    const handleClickContent = (e) => {
        e.stopPropagation();
    }

    const showData = () => data && data.pictures && data.pictures.map((picture, i) =>
        <Carousel.Item key={i} className={style.Item}>
            <img
                className={`d-block w-100 h-100 ${style.Picture}`}
                src={picture}
                alt={`${data.name} ${i}`}
            />
        </Carousel.Item>
    )

    return (
        <div className={`${style.Popup} ${isActive ? style.Active : ''}`} onClick={handleClose}>
            <div className={`${style.PopupContent} ${isActive ? style.Active : ''}`} onClick={handleClickContent}>
                <div className={style.PopupClose} onClick={handleClose}>
                    &times;
                </div>
                <Carousel
                    keyboard={true}
                    activeIndex={index}
                    onSelect={handleSelect}
                    controls={false}
                    indicators={false}
                    interval={5000}
                    pause={false}
                >
                    {showData()}
                </Carousel>
                <div className={style.Text}>
                    <div>{data.intro}</div>
                    <a href={data.url} target='_blank' rel="noopener noreferrer">view website</a>
                </div>
            </div>
        </div>
    );
}

export default WorkPopup;
