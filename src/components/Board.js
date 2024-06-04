import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Main from "./Main";
import WeatherService from "../services/WeatherService";
import WeatherDataContext from "../context/WeatherDataContext";


const Board = () => {
    const [city, setCity] = useState('Ivano-Frankivsk');
    const [tryCity, setTryCity] = useState('Ivano-Frankivsk');
    const [error, setError] = useState(null);
    const [tempType, setTempType] = useState('C');
    const [weatherDailyData, setWeatherDailyData] = useState({});
    const [weatherWeekData, setWeatherWeekData] = useState({});

    const service = new WeatherService();

    useEffect(() => {
        onRequest(city);
    }, []);

    useEffect(() => {
        onRequest(tryCity);

    }, [tryCity]);

    const onRequest = async (city) => {
        try {
            const day = await service.getDailyWeatherData(city);
            const week = await service.getWeekWeatherData(city);
            setWeatherDailyData(day);
            setWeatherWeekData(week);
            setCity(city);
            setError(null);
        } catch (e) {
            console.log(e);
            setError(e);
        }
    };

    const convertCelsiusToFahrenheit = () => {
        setWeatherDailyData((prevState) => {
            const newTemp = (prevState.temp * 1.8) + 32;
            return { ...prevState, temp: newTemp };
        });
    };

    const convertFahrenheitToCelsius = () => {
        setWeatherDailyData((prevState) => {
            const newTemp = (prevState.temp - 32) * (5 / 9);
            return { ...prevState, temp: newTemp };
        });
    };

    const convertTemp = (type) => {
        if ((type === 'F') && (tempType === 'C')) {
            convertCelsiusToFahrenheit();
            setTempType('F');
        }
        if ((type === 'C') && (tempType === 'F')) {
            convertFahrenheitToCelsius();
            setTempType('C');
        }
    };

    return (
        <WeatherDataContext.Provider value={{weatherDailyData, weatherWeekData}}>
            <div className="board">
                <Sidebar
                    changeCity={setTryCity}
                    tempType={tempType}
                    city={city}
                    error={error} />
                <Main
                    convert={convertTemp}
                    tempType={tempType} />
            </div>
        </WeatherDataContext.Provider>
    );
};

export default Board;
