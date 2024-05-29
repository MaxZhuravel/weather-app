import React, {Component} from 'react';
import WeatherDataContext from "../context/WeatherDataContext";

class Today extends Component {

    static contextType = WeatherDataContext;

    getDayString = (dayNumber) => {
        if (this.context.date) {
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

    render() {
        let day = '';
        let temp = 0;
        let time = "";
        if (this.context.date) {
            let date = new Date(this.context.date * 1000);
            day = this.getDayString(date.getDay());
            temp = this.context.temp
            time = date.getHours() + ":" + date.getMinutes();
        }

        return (
            <div className="today">
                <div className="today__image">
                    <img src="/icons/001-sun.png" alt=" "/>
                </div>
                <div className="today__temp">{temp}<span>°{this.props.tempType}</span></div>
                <div className="today__name">{day}, <span>{time}</span></div>
            </div>
        );
    }
}

export default Today;