import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import Main from "./Main";
import WeatherService from "../services/WeatherService";
import WeatherDataContext from "../context/WeatherDataContext";

class Board extends Component {

    state = {
        city: 'Ivano-Frankivsk',
        tempType: 'C',
        weatherData: {}
    };

    service = new WeatherService();

    componentDidMount() {
        this.onRequest(this.state.city);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.city !== this.state.city) {
            this.onRequest(this.state.city);
        }
    }

    onRequest = async (city) => {
        let data = await this.service.getWeatherData(city);
        this.setState({weatherData: data});
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
                        changeCity={this.changeCity}
                        tempType={this.state.tempType}
                        city={this.state.city}/>
                    <Main
                        convert={this.convertTemp}
                        tempType={this.state.tempType}/>
                </div>
            </WeatherDataContext.Provider>
        );
    }
}

export default Board;