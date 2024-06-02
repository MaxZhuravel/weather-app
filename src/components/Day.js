import React from 'react';

const Day = (props) => {
    return (
        <div className="day">
            <div className="day__name">{props.dayName}</div>
            <div className="day__img">
                <img src="/icons/02d.png" alt=""/>
            </div>
            <div className="day__temp">15</div>
        </div>
    );

}

export default Day;