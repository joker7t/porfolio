import React from 'react';
import style from './css/WorkPopup.module.scss';

const WorkPopup = ({ popupData, setPopupData }) => {

    const handleClose = () => {
        setPopupData({
            ...popupData,
            isActive: false
        })
    }

    const handleClickContent = (e) => {
        e.stopPropagation();
    }

    const { data, isActive } = popupData;

    return (
        <div className={`${style.Popup} ${isActive ? style.Active : ''}`} onClick={handleClose}>
            <div className={`${style.PopupContent} ${isActive ? style.Active : ''}`} onClick={handleClickContent}>
                <div className={style.PopupClose} onClick={handleClose}>
                    &times;
                </div>
            </div>
        </div>
    );
}

export default WorkPopup;
