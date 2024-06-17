import React, {useState, useEffect} from 'react';
import Sidebar from "./Sidebar";
import Main from "./Main";
import WeatherService from "../services/WeatherService";
import WeatherDataContext from "../context/WeatherDataContext";
import Loader from "./Loader";


const Board = () => {
    const [displayCity, setDisplayCity] = useState('Ivano-Frankivsk');
    const [requestCity, setRequestCity] = useState('Ivano-Frankivsk');
    const [error, setError] = useState(null);
    const [tempType, setTempType] = useState('C');
    const [weatherDailyData, setWeatherDailyData] = useState({});
    const [weatherWeekData, setWeatherWeekData] = useState([]);
    const [loading, setLoading] = useState(true);

    const service = new WeatherService();

    useEffect(() => {
        onRequest(requestCity);
    }, [requestCity]);

    const onRequest = async (city) => {
        try {
            setLoading(true);
            const day = await service.getDailyWeatherData(city);
            const week = await service.getWeekWeatherData(city);
            setWeatherDailyData(day);
            setWeatherWeekData(week);
            tempType === 'F' && convertCelsiusToFahrenheit();
            setDisplayCity(city);
            setError(null);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setError(e);
            setLoading(false)
        }
    };

    const getFahrenheit = (number) => {
        return ((number * 1.8) + 32);
    }

    const getCelsius = (number) => {
        return ((number - 32) * (5 / 9));
    }

    const convertCelsiusToFahrenheit = () => {
        setWeatherDailyData((prevState) => {
            const newTemp = getFahrenheit(prevState.temp);
            return {...prevState, temp: newTemp};
        });
        setWeatherWeekData((prevState) => {
            return prevState.map(item => {
                return ({...item, min: getFahrenheit(item.min), max: getFahrenheit(item.max)});
            });
        });
    };

    const convertFahrenheitToCelsius = () => {
        setWeatherDailyData((prevState) => {
            const newTemp = getCelsius(prevState.temp);
            return {...prevState, temp: newTemp};
        });
        setWeatherWeekData((prevState) => {
            return prevState.map(item => {
                return ({...item, min: getCelsius(item.min), max: getCelsius(item.max)});
            });
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
            {loading && <Loader/>}
            <div className="board">
                <Sidebar
                    changeCity={setRequestCity}
                    tempType={tempType}
                    city={displayCity}
                    error={error}/>
                <Main
                    convert={convertTemp}
                    tempType={tempType}/>
            </div>


        </WeatherDataContext.Provider>
    );
};

export default Board;
