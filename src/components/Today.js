import React, {useContext} from 'react';
import WeatherDataContext from "../context/WeatherDataContext";

const Today = ({tempType}) => {

    const {weatherDailyData} = useContext(WeatherDataContext);

    let day = '';
    let temp = 0;
    let time = "";
    if (weatherDailyData.date) {
        const date = new Date(weatherDailyData.date * 1000);
        day = new Date(weatherDailyData.date).toLocaleDateString(
            'en-US',
            { weekday: 'long' }
        );
        temp = weatherDailyData.temp
        time = date.getHours() + ":" + date.getMinutes();
    }

    return (
        <div className="today">
            <div className="today__image">
                <img src={`/icons/${weatherDailyData.icon}.png`} alt=" "/>
            </div>
            <div className="today__info">
                <div className="today__temp">{Math.round(temp)}<span>°{tempType}</span></div>
                <div className="today__name">{day}, <span>{time}</span></div>
            </div>
        </div>
    );
}

export default Today;