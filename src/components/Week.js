import React from 'react';
import Day from "./Day";
import TempType from "./TempType";

const Week = (props) => {

    const dayNameArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const renderDays = () => {
        return (dayNameArr.map(day => {
            return <Day key={day} dayName={day}/>;
        }));
    }

    let days = renderDays();

    let classNames = props.tempType === 'C'
        ? ['celsius active', 'fahrenheit']
        : ['celsius', 'fahrenheit active'];

    return (
        <div className="week">
            <div className="week__header">
                <div className="week__title">Week</div>
                <div className="week__temp-type">
                    <TempType className={classNames[0]} type="C" convert={() => props.convert('C')}/>
                    <TempType className={classNames[1]} type="F" convert={() => props.convert('F')}/>
                </div>
            </div>
            <div className="week__body">
                {days}
            </div>
        </div>
    );
}

export default Week;