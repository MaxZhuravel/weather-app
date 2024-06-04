import React from 'react';

const Day = (props) => {

    const min = Math.round(props.min);
    const max = Math.round(props.max);

    return (
        <div className="day">
            <div className="day__name">{props.dayName}</div>
            <div className="day__body">
                <div className="day__img">
                    <img src={`/icons/${props.icon}.png`} alt=""/>
                </div>
                <div className="day__temp">
                    <div>{max} <span>°{props.tempType}</span></div>
                    <div>{min} <span>°{props.tempType}</span></div>
                </div>
            </div>
        </div>
    );

}

export default Day;