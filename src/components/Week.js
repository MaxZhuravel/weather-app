import React, {useContext} from 'react';
import Day from "./Day";
import TempType from "./TempType";
import WeatherDataContext from "../context/WeatherDataContext";

const Week = (props) => {

    const {tempType, convert} = props;

    const {weatherWeekData} = useContext(WeatherDataContext);

    const renderDays = () => {
       if (weatherWeekData.length) {
           return weatherWeekData.map(({ day, min, max, icon }) => {
               return <Day
                        key={day}
                        dayName={day}
                        min={min}
                        max={max}
                        icon={icon}
                        tempType={tempType} />;
           });
       }
    };

    const days = renderDays();

    const classNames = tempType === 'C'
        ? ['celsius active', 'fahrenheit']
        : ['celsius', 'fahrenheit active'];

    return (
        <div className="week">
            <div className="week__header">
                <div className="week__title">Week</div>
                <div className="week__temp-type">
                    <TempType className={classNames[0]} type="C" convert={() => convert('C')}/>
                    <TempType className={classNames[1]} type="F" convert={() => convert('F')}/>
                </div>
            </div>
            <div className="week__body">
                {days}
            </div>
        </div>
    );
}

export default Week;