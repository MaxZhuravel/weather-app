import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import Main from "./Main";
import WeatherService from "../services/WeatherService";
import WeatherDataContext from "../context/WeatherDataContext";

class Board extends Component {

    state = {
        weatherData: {}
    };

    service = new WeatherService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = async () => {
        let data = await this.service.getWeatherData();
        this.setState({weatherData: data});
    }

    render() {

        return (
            <WeatherDataContext.Provider value={this.state.weatherData}>
                <div className="board">
                    <Sidebar weatherData={this.state.weatherData}/>
                    <Main weatherData={this.state.weatherData}/>
                </div>
            </WeatherDataContext.Provider>
        );
    }
}

export default Board;