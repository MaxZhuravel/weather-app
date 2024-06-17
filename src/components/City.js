import React, {useContext} from 'react';
import WeatherDataContext from "../context/WeatherDataContext";

const City = ({ city }) => {

    const {weatherDailyData} = useContext(WeatherDataContext);
    const country = weatherDailyData.country

    return (
        <div className="sidebar__city">
            <img src="/img/new-york.jpg" alt="city"/>
            <div className="city__name">{city}, {country}</div>
        </div>
    );
}

export default City;