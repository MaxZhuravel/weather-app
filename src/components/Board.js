import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import Main from "./Main";
import WeatherService from "../services/WeatherService";
import WeatherDataContext from "../context/WeatherDataContext";

class Board extends Component {

    state = {
        city: 'Ivano-Frankivsk',
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

    render() {

        return (
            <WeatherDataContext.Provider value={this.state.weatherData}>
                <div className="board">
                    <Sidebar
                        weatherData={this.state.weatherData}
                        changeCity={this.changeCity}/>
                    <Main weatherData={this.state.weatherData}/>
                </div>
            </WeatherDataContext.Provider>
        );
    }
}

export default Board;