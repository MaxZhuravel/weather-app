/*import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import Main from "./Main";
import WeatherService from "../services/WeatherService";
import WeatherDataContext from "../context/WeatherDataContext";

class Board extends Component {

    state = {
        city: 'Ivano-Frankivsk',
        tryCity: 'Ivano-Frankivsk',
        error: null,
        tempType: 'C',
        weatherData: {}
    };

    service = new WeatherService();

    componentDidMount() {
        this.onRequest(this.state.city);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tryCity !== this.state.tryCity) {
            this.onRequest(this.state.tryCity).catch(this.setError);
        }
    }

    setError = (e) => {
        console.log(e);
        this.setState({ error: e });
    }

    onRequest = async (city) => {
        let data = await this.service.getWeatherData(city);
        this.setState({weatherData: data, city, error: null});
    }

    changeTryCity = (city) => {
        this.setState({
            tryCity: city
        });
    }

    changeCity = (city) => {
        this.setState({
            city
        });
    }

    convertCelsiusToFahrenheit = () => {
        this.setState((prevState) => {
            let newTemp = (prevState.weatherData.temp * 1.8) + 32;
            return ({
                weatherData: {...prevState.weatherData, temp: newTemp}
            });
        });
    }

    convertFahrenheitToCelsius = () => {
        this.setState((prevState) => {
            let newTemp = (prevState.weatherData.temp - 32) * (5 / 9);
            return ({
                weatherData: {...prevState.weatherData, temp: newTemp}
            });
        });
    }

    convertTemp = (type) => {
        if ((type === 'F') && (this.state.tempType === 'C')) {
            this.convertCelsiusToFahrenheit();
            this.setState({ tempType: 'F' });
        }
        if ((type === 'C') && (this.state.tempType === 'F')) {
            this.convertFahrenheitToCelsius();
            this.setState({ tempType: 'C' });
        }
    }

    render() {

        return (
            <WeatherDataContext.Provider value={this.state.weatherData}>
                <div className="board">
                    <Sidebar
                        changeCity={this.changeTryCity}
                        tempType={this.state.tempType}
                        city={this.state.city}
                        error={this.state.error}/>
                    <Main
                        convert={this.convertTemp}
                        tempType={this.state.tempType}/>
                </div>
            </WeatherDataContext.Provider>
        );
    }
}

export default Board;*/

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
    const [weatherData, setWeatherData] = useState({});

    const service = new WeatherService();

    useEffect(() => {
        onRequest(city);
    }, []);

    useEffect(() => {
        onRequest(tryCity);//.catch(setError);

    }, [tryCity]);

    const onRequest = async (city) => {
        try {
            const data = await service.getWeatherData(city);
            setWeatherData(data);
            setCity(city);
            setError(null);
        } catch (e) {
            setError(e);
        }
    };

    const convertCelsiusToFahrenheit = () => {
        setWeatherData((prevState) => {
            const newTemp = (prevState.temp * 1.8) + 32;
            return { ...prevState, temp: newTemp };
        });
    };

    const convertFahrenheitToCelsius = () => {
        setWeatherData((prevState) => {
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
        <WeatherDataContext.Provider value={weatherData}>
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
