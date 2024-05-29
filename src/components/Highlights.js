import React, {Component} from 'react';
import HighlightsItem from "./HighlightsItem";
import WeatherDataContext from "../context/WeatherDataContext";

class Highlights extends Component {

    static contextType = WeatherDataContext;

    renderHighlightsItems = () => {
        let items = null;
        if (this.context.id) {
            items = this.context.highlights.map((item, i) => {
                let subtitle = this.getSubtitle(item.value, i);
                return <HighlightsItem
                    key={item.title}
                    title={item.title}
                    isValue={true}
                    value={this.getValue(item.title, item.value)}
                    subtitle={subtitle}
                    unitMeasure={this.getUnitMeasure(item.title)}/>
            });
        }
        return items;
    }

    getUnitMeasure(item) {
        switch (item) {
            case 'Pressure': return " gPa";
            case 'Wind Status': return " km/h";
            case 'Humidity': return " %";
            case 'Visibility': return " km";
            case 'Clouds': return " %";
            default: return null;
        }
    }

    getValue(title, source) {
        if (title === 'Sunrise & Sunset') {
            let sunriseDate = new Date(source[0] * 1000);
            let sunsetDate = new Date(source[1] * 1000);
            let sunriseTime = sunriseDate.getHours() + ':' + sunriseDate.getMinutes()
            let sunsetTime = sunsetDate.getHours() + ':' + sunsetDate.getMinutes()
            return [
                {imgSrc: '/icons/027-sunrise.png', time: sunriseTime},
                {imgSrc: '/icons/026-sunset.png', time: sunsetTime}
            ];
        } else if (title === 'Wind Status') {
            return source[0];
        } else return source;
    }

    getWindDirection = (value) => {
        if (((value => 0) && (value <= 11.25)) || ((value > 348.75) && (value <= 360))) return "N";
        if (value > 11.25 && value <= 33.75) return "NNE";
        if (value > 33.75 && value <= 56.25) return "NE";
        if (value > 66.25 && value <= 78.75) return "ENE";
        if (value > 78.75 && value <= 101.25) return "E";
        if (value > 101.25 && value <= 123.75) return "ESE";
        if (value > 123.75 && value <= 146.25) return "SE";
        if (value > 146.25 && value <= 168.75) return "SSE";
        if (value > 168.75 && value <= 191.25) return "S";
        if (value > 191.25 && value <= 213.75) return "SSW";
        if (value > 213.75 && value <= 236.25) return "SW";
        if (value > 236.25 && value <= 258.75) return "WSW";
        if (value > 258.75 && value <= 281.25) return "W";
        if (value > 281.25 && value <= 303.75) return "WNW";
        if (value > 303.75 && value <= 326.25) return "NW";
        if (value > 326.25 && value <= 348.75) return "NNW";
        else return null;
    }

    getSubtitle = (value, i) => {
        switch (i) {
            case 0: {
                if (value < 1000) return 'Low';
                else if (value > 1013) return 'High';
                else return 'Normal';
            }
            case 1: {
                return this.getWindDirection(value[1]);
            }
            case 2:
                return null;
            case 3: {
                if (value < 40) return "Low";
                if (value > 70) return "High";
                else return "Normal";
            }
            case 4: {
                if (value < 5) return "Low";
                if (value > 5 && value < 8) return "Average";
                else return "High";
            }
            case 5: {
                if (value < 10) return "Clear";
                if (value > 10 && value <= 40) return "Mostly Clear";
                if (value > 40 && value <= 70) return "Partly Cloudy";
                if (value > 70 && value <= 90) return "Cloudy";
                else return "Overcast Clouds"

            }
            default:
                return null;
        }
    }

    render() {

        let items = this.renderHighlightsItems();

        return (
            <div className="highlights">
                <div className="highlights__title">Today`s Highlights</div>
                <div className="highlights__body">
                    {items}
                </div>
            </div>
        );
    }

}

export default Highlights;