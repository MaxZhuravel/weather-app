import React from 'react';

const Day = ({dayName, icon, tempType, min, max}) => {

    const viewMin = Math.round(min);
    const viewMax = Math.round(max);

    return (
        <div className="day">
            <div className="day__name">{dayName}</div>
            <div className="day__body">
                <div className="day__img">
                    <img src={`/icons/${icon}.png`} alt=""/>
                </div>
                <div className="day__temp">
                    <div>{viewMin} <span>°{tempType}</span></div>
                    <div>{viewMax} <span>°{tempType}</span></div>
                </div>
            </div>
        </div>
    );

}

export default Day;