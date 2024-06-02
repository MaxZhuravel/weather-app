import React, {useContext} from 'react';
import WeatherDataContext from "../context/WeatherDataContext";

const Today = (props) => {

    const context = useContext(WeatherDataContext);

    const getDayString = (dayNumber) => {
        if (context.date) {
            switch (dayNumber) {
                case 0: return 'Sunday';
                case 1: return 'Monday';
                case 2: return 'Tuesday';
                case 3: return 'Wednesday';
                case 4: return 'Thursday';
                case 5: return 'Friday';
                case 6: return 'Saturday';
                default: return '';
            }
        }
    }

    let day = '';
    let temp = 0;
    let time = "";
    if (context.date) {
        let date = new Date(context.date * 1000);
        day = getDayString(date.getDay());
        temp = context.temp
        time = date.getHours() + ":" + date.getMinutes();
    }

    return (
        <div className="today">
            <div className="today__image">
                <img src={`/icons/${context.icon}.png`} alt=" "/>
            </div>
            <div className="today__temp">{Math.round(temp)}<span>°{props.tempType}</span></div>
            <div className="today__name">{day}, <span>{time}</span></div>
        </div>
    );
}

export default Today;