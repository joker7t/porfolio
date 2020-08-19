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
        <div className={`popup ${isActive ? 'active' : ''}`} onClick={handleClose}>
            <div className={`popup__content ${isActive ? 'active' : ''}`} onClick={handleClickContent}>
                <div className="popup__close" onClick={handleClose}>
                    &times;
                </div>
            </div>
        </div>
    );
}

export default WorkPopup;
