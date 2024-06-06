import React from 'react';

const Day = (props) => {

    const {dayName, icon, tempType} = props

    const min = Math.round(props.min);
    const max = Math.round(props.max);

    return (
        <div className="day">
            <div className="day__name">{dayName}</div>
            <div className="day__body">
                <div className="day__img">
                    <img src={`/icons/${icon}.png`} alt=""/>
                </div>
                <div className="day__temp">
                    <div>{max} <span>°{tempType}</span></div>
                    <div>{min} <span>°{tempType}</span></div>
                </div>
            </div>
        </div>
    );

}

export default Day;